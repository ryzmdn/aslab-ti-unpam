import { Info } from "lucide-react";
import Image from "next/image";

interface Props {
  image: string;
  caption: string;
  className?: string;
}

export function Figure({ image, caption, className }: Readonly<Props>) {
  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image src={image} alt={caption} fill className="object-cover" />
      </div>
      <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-base-foreground-400">
        <Info
          aria-hidden="true"
          className="mt-1 size-3.5 flex-none text-base-foreground-400"
        />
        {caption}
      </figcaption>
    </figure>
  );
}
