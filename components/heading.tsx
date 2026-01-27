import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  containerClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  containerClassName,
  ...props
}: SectionHeaderProps) {
  return (
    <section
      className={cn(
        "bg-transparent px-6 py-24 sm:py-32 lg:px-8",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto max-w-2xl text-center",
          containerClassName
        )}
      >
        {eyebrow && (
          <p className="text-base/7 font-semibold text-orange-600 dark:text-orange-400">
            {eyebrow}
          </p>
        )}

        <h2 className="scroll-m-20 text-4xl text-base-100 font-semibold tracking-tight first:mt-0">
          {title}
        </h2>

        {description && (
          <p className="mt-8 text-base/7 font-medium text-pretty text-base-foreground-300 sm:text-lg/8">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
