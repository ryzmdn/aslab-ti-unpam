import Image from "next/image";
import { ReactNode } from "react";
import { CalendarDays, Info } from "lucide-react";
import { Button } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RecruitmentCardProps {
  poster: string;
  name: string;
  dateFrom?: string;
  dateTo?: string;
  dialog?: {
    title: string;
    description?: string;
    content: ReactNode;
    ctaLabel?: string;
  };
}

export function RecruitmentCard({
  poster,
  name,
  dateFrom,
  dateTo,
  dialog,
}: Readonly<RecruitmentCardProps>) {
  return (
    <div className="relative">
      <div className="relative aspect-4/5 overflow-hidden rounded-lg">
        <Image
          alt={name}
          src={poster}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mt-4">
        <h3 className="text-xl font-semibold tracking-tight text-base-foreground-100">
          {name}
        </h3>

        {(dateFrom || dateTo) && (
          <div className="mt-3 mb-4 flex items-center gap-5 text-sm/6">
            {dateFrom && (
              <div className="flex items-center gap-x-1">
                <CalendarDays className="size-4" />
                <time dateTime={dateFrom}>{dateFrom}</time>
              </div>
            )}

            {dateFrom && dateTo && <span>&ndash;</span>}

            {dateTo && (
              <div className="flex items-center gap-x-1">
                <CalendarDays className="size-4" />
                <time dateTime={dateTo}>{dateTo}</time>
              </div>
            )}
          </div>
        )}
      </div>

      {dialog && (
        <div className="mt-3 w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="w-full">
                <Info />
                {dialog.ctaLabel ?? "Daftar Sekarang"}
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{dialog.title}</DialogTitle>
                {dialog.description && (
                  <DialogDescription>
                    {dialog.description}
                  </DialogDescription>
                )}
              </DialogHeader>

              <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 space-y-4">
                <div className="relative aspect-4/5 overflow-hidden rounded-lg">
                  <Image
                    alt={name}
                    src={poster}
                    fill
                    className="object-cover"
                  />
                </div>

                {dialog.content}
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
