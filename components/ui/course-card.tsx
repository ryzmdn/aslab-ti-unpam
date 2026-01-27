import { Course } from "@/types";

export function CourseCard({
  icon: Icon,
  name,
  description,
  semester,
  sks,
}: Readonly<Course>) {
  return (
    <div className="size-full p-6 bg-base-50 border border-base-200 rounded-2xl">
      <div className="flex items-center sm:justify-between">
        <span className="inline-flex items-center rounded-full bg-orange-50 size-14 p-3 text-orange-700 inset-ring inset-ring-orange-600/10 dark:bg-orange-400/10 dark:text-orange-400 dark:inset-ring-orange-400/20">
          <Icon className="size-full" />
        </span>

        <div className="hidden flex-col items-end gap-y-1 sm:flex">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 inset-ring inset-ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:inset-ring-amber-500/20">
            Semester {semester}
          </span>
          <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 inset-ring inset-ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:inset-ring-yellow-400/30">
            SKS {sks}
          </span>
        </div>
      </div>

      <div className="mt-16 space-y-2.5">
        <h3 className="scroll-m-20 text-xl text-base-foreground-200 font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-base/7 text-base-foreground-400">{description}</p>

        <div className="flex gap-x-1 mt-5 sm:hidden">
          <span className="inline-flex items-center w-max rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600 inset-ring inset-ring-orange-500/10">
            Semester {semester}
          </span>
          <span className="inline-flex items-center w-max rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 inset-ring inset-ring-amber-600/10">
            SKS {sks}
          </span>
        </div>
      </div>
    </div>
  );
}
