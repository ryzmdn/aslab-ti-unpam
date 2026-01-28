import type { Metadata } from "next";
import { notFound } from "next/navigation";
import axios from "axios";
import { convertEncode, formatDate } from "@/lib/utils";
import { Post, Term } from "@/types/wordpress";
import { Card } from "@/components/ui/post-card";
import {
  createBreadcrumbItems,
  DynamicBreadcrumb,
} from "@/components/DynamicBreadcrumb";
import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: Readonly<{ params: Params }>): Promise<Metadata> {
  const { slug } = await params;
  try {
    const response = await axios.get<Post[]>(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?slug=${slug}&_embed`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
    const post = response.data[0];

    if (!post)
      return {
        title: "Post Not Found",
        description: "The requested blog post could not be found.",
      };

    const title = post.title.rendered;
    const description = post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .substring(0, 160);
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const publishedTime = post.date_gmt;
    const modifiedTime = post.modified_gmt;
    const tags =
      post._embedded?.["wp:term"]?.[1]?.map((tag: Term) => tag.name) || [];
    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

    return {
      title: convertEncode(title),
      description: description,
      openGraph: {
        title: title,
        description: description,
        type: "article",
        publishedTime: publishedTime,
        modifiedTime: modifiedTime,
        authors: post._embedded?.["author"]?.map((author) => author.name) || [],
        tags: tags,
        section: category,
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: featuredImage ? [featuredImage] : [],
      },
      keywords: tags,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error Loading Post",
      description: "There was an issue retrieving the blog post.",
    };
  }
}

async function getPost(slug: string) {
  try {
    const response = await axios.get<Post[]>(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?slug=${slug}&_embed`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
    return response.data[0] || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

async function getRelatedPosts(currentPost: Post) {
  try {
    const response = await axios.get<Post[]>(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?_embed`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
    const allPosts = response.data;

    const currentPostTags =
      currentPost._embedded?.["wp:term"]?.[1]?.map((tag) => tag.slug) || [];

    const relatedPosts = allPosts.filter((post) => {
      if (post.id === currentPost.id) return false;
      const postTags =
        post._embedded?.["wp:term"]?.[1]?.map((tag) => tag.slug) || [];
      return postTags.some((tag) => currentPostTags.includes(tag));
    });

    return relatedPosts.toSorted(() => 0.5 - Math.random());
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

export default async function Content({
  params,
}: Readonly<{ params: Params }>) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  const relatedPosts = await getRelatedPosts(post);
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;
  const tags =
    post._embedded?.["wp:term"]?.[1]?.map((tag: Term) => tag.name) || [];

  return (
    <>
      <Container
        as="div"
        id="content-section"
        className="w-full max-w-4xl mx-auto px-4 text-base text-base-foreground-400 space-y-6 pt-4 pb-10 sm:px-6 lg:px-8"
      >
        <header
          id={`header-${post.title.rendered.replace(/ /gi, "-").toLowerCase()}`}
          className="w-full h-max space-y-5 mt-24"
        >
          <DynamicBreadcrumb
            items={createBreadcrumbItems([
              { label: "Home", href: "/" },
              { label: "Blog", href: "/berita-acara?page=1" },
              { label: convertEncode(post.title.rendered) },
            ])}
          />
          <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-balance text-base-foreground-100 sm:text-5xl">
            {convertEncode(post.title.rendered)}
          </h1>

          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <User className="size-3.5" />
              <p>
                {category
                  ? category.charAt(0).toUpperCase() +
                    category.slice(1).toLowerCase()
                  : "Uncategorized"}
              </p>
            </div>
            <span>&ndash;</span>
            <div className="flex items-center gap-x-2">
              <CalendarDays className="size-3.5" />
              <p>{formatDate(post.date)}</p>
            </div>
          </div>
        </header>

        <div className="size-full space-y-16 mt-5">
          <div className="text-base/7 blog-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
       
          <footer className="w-full py-7">
          <h5 className="text-base/7 font-semibold">Tags</h5>
          <div className="flex flex-wrap gap-x-2 gap-y-1.5 my-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="capitalize">{tag}</Badge>
            ))}
          </div>
        </footer>
        </div>
      </Container>

      <Container
        id="related-posts-section"
        as="section"
        className="space-y-6 px-4 py-20 sm:px-6 lg:px-8"
      >
        <header
          id="related-posts-header"
          className="flex justify-between items-center"
        >
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 sm:text-4xl">
            Related Posts
          </h2>
          <Button variant="outline" asChild>
            <Link href="/berita-acara?page=1">
              View All <ArrowRight />
            </Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.slice(0, 3).map((post) => (
            <Card
              key={post.id}
              featuredImage={post._embedded?.["wp:featuredmedia"]?.[0]}
              title={post.title.rendered}
              url={post.slug}
              date={post.date}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
