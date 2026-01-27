import { Room } from "@/types";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function RoomCard({
  number,
  image,
  description,
  location,
}: Readonly<Room>) {
  return (
    <div className="relative">
      <div className="group overflow-hidden rounded-lg bg-base-100 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-500">
        <div className="relative aspect-video outline -outline-offset-1 outline-base-foreground-50/5 group-hover:opacity-75 rounded-lg shadow-xl">
          <Image
            src={image || ""}
            alt={`Gambar utama ruang laboratorium ${number}`}
            fill
            className="pointer-events-none object-cover"
          />
        </div>
        <button type="button" className="absolute inset-0 focus:outline-hidden">
          <span className="sr-only">Lihat detail laboratorium {number}</span>
        </button>
      </div>

      <div className="w-full mt-3 space-y-1.5">
        <h3 className="scroll-m-20 text-xl text-base-foreground-200 font-semibold tracking-tight">
          Ruang Laboratorium {number}
        </h3>
        <p className="pointer-events-none text-base/7 text-base-foreground-300">
          {description}
        </p>
        <div className="flex items-center gap-x-1 text-base-foreground-400">
          <MapPin className="size-3.5" />
          <p className="text-sm/6">{location}</p>
        </div>
      </div>
    </div>
  );
}
