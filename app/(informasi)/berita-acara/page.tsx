import { wordPressService } from "@/services";
import { Post } from "@/types";
import { Card } from "@/components/ui/post-card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";

async function getRecentPosts(): Promise<Post[]> {
  return await wordPressService.getPosts<Post>();
}

export default async function Page() {
  const recentPosts = await getRecentPosts();

  return (
    <>
      <SectionHeader eyebrow="Berita Acara" title="Loem Ipsum Dolor" description="lorepm ipsum" className="mt-24" />

      <Container as="section" className="px-4 py-8">
        {recentPosts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Belum ada artikel
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                featuredImage={post._embedded?.["wp:featuredmedia"]?.[0]}
                title={post.title.rendered}
                url={post.slug}
                category={post._embedded?.["wp:term"]?.[0]?.[0].name}
                date={post.date}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
