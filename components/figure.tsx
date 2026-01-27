import { HTMLAttributes, ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface FigureProps extends HTMLAttributes<HTMLElement> {
  image: string;
  caption?: ReactNode;
  imageAlt?: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
  imageWrapperClassName?: string;
  captionClassName?: string;
  showIcon?: boolean;
  icon?: ReactNode;
}

export function Figure({
  image,
  caption,
  imageAlt,
  imageProps,
  className,
  imageWrapperClassName,
  captionClassName,
  showIcon = true,
  icon,
  ...props
}: FigureProps) {
  return (
    <figure className={className} {...props}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl",
          imageWrapperClassName
        )}
      >
        <Image
          src={image}
          alt={imageAlt || (typeof caption === "string" ? caption : "")}
          className="object-cover"
          {...imageProps}
        />
      </div>

      {caption && (
        <figcaption
          className={cn(
            "mt-4 flex gap-x-2 text-sm/6 text-base-foreground-400",
            captionClassName
          )}
        >
          {showIcon && (
            <span className="mt-1 flex-none">
              {icon ?? (
                <Info
                  aria-hidden="true"
                  className="size-3.5 text-base-foreground-400"
                />
              )}
            </span>
          )}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
