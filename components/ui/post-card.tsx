import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User } from "lucide-react";
import { formatDate, decodeHtmlEntities } from "@/lib/utils";

interface Props {
  date: string;
  url: string;
  category?: string;
  title: string;
  featuredImage?: {
    source_url: string;
    alt_text: string;
  };
}

export function Card({
  featuredImage,
  title,
  date,
  url,
}: Readonly<Props>) {
  return (
    <article className="group relative flex flex-col items-start justify-between">
      {featuredImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={featuredImage.source_url}
            alt="Featured image"
            loading="lazy"
            fill
            className="object-cover group-hover:scale-105"
          />
        </div>
      )}
      <div className="grid grid-cols-2 gap-x-3 text-sm/6 font-medium mt-3">
        <div className="flex items-center gap-x-2">
          <User size={14} />
          <p className="capitalize rounded-full text-base-foreground-400">Admin</p>
        </div>
        <div className="flex items-center gap-x-2 w-full">
          <CalendarDays size={14} className="mb-0.5" />
          <time
            dateTime={new Date(date).toLocaleDateString()}
            className="text-base-foreground-400"
          >
            {formatDate(new Date(date).toLocaleDateString())}
          </time>
        </div>
      </div>
      <div className="w-full grow my-3">
        <h3 className="text-base-foreground-100 text-2xl font-semibold line-clamp-2">
          <Link
            href={`/post/${url}`}
          >
            <span className="absolute inset-0" />
            {decodeHtmlEntities(title)}
          </Link>
        </h3>
      </div>
    </article>
  );
}
