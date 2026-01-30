import { HTMLAttributes, ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageDialog } from "./ui/image-dialog";

interface FigureProps extends HTMLAttributes<HTMLElement> {
  image: string;
  caption?: ReactNode;
  imageAlt?: string;
  imageWrapperClassName?: string;
  captionClassName?: string;
  showIcon?: boolean;
  icon?: ReactNode;
}

export function Figure({
  image,
  caption,
  imageAlt,
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
          "relative overflow-hidden rounded sm:rouned-lg lg:rounded-xl",
          imageWrapperClassName,
        )}
      >
        <ImageDialog
          src={image}
          alt={imageAlt || (typeof caption === "string" ? caption : "")}
        />
      </div>

      {caption && (
        <figcaption
          className={cn(
            "mt-4 flex gap-x-2 text-sm/6 text-base-foreground-400",
            captionClassName,
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
