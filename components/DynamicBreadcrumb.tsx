import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface DynamicBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export function DynamicBreadcrumb({ items }: Readonly<DynamicBreadcrumbProps>) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {item.isActive || !item.href ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function createBreadcrumbItems(
  segments: { label: string; href?: string }[]
): BreadcrumbItemType[] {
  return segments.map((segment, index) => ({
    label: segment.label,
    href: segment.href,
    isActive: index === segments.length - 1,
  }));
}
