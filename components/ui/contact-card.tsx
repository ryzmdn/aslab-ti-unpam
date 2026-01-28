import { ContactProps } from "@/types";

export function ContactCard({ title, value, icon: Icon }: Readonly<ContactProps>) {
  return (
    <li className="flex items-start gap-x-3.5 rounded-2xl bg-base-100 p-4">
      <div className="shrink-0 inline-flex size-12 items-center justify-center rounded-full bg-orange-50 p-3 text-orange-700 inset-ring inset-ring-orange-600/10 dark:bg-orange-400/10 dark:text-orange-400 dark:inset-ring-orange-400/20">
        <Icon className="size-full" aria-hidden />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-base-foreground-200">
          {title}
        </h3>
        <p className="text-sm/6 text-base-foreground-400">{value}</p>
      </div>
    </li>
  );
}
