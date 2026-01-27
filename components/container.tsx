import { PropsWithChildren, HTMLAttributes, ElementType } from "react";

type ContainerProps<T extends ElementType = "section"> =
  PropsWithChildren<{
    as?: T;
    className?: string;
    style?: React.CSSProperties;
  }> &
    HTMLAttributes<HTMLElement>;

export function Container<T extends ElementType = "section">({
  as,
  children,
  className,
  style,
  ...props
}: ContainerProps<T>) {
  const Component = as || "section";

  return (
    <Component className={className} style={style} {...props}>
      {children}
    </Component>
  );
}
