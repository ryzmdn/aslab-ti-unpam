"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { member } from "@/constants/anggota";

export default function AsistenLab() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <SectionHeader
        eyebrow="Anggota Organisasi"
        title="Asisten Laboratorium"
        description="Tim asisten laboratorium yang berdedikasi untuk mendukung kelancaran pembelajaran dan praktikum."
       className="mt-24"
      />

      <div className="relative mt-14 grid grid-cols-1 gap-10 px4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sticky top-0 z-50 flex gap-6 bg-base-50/80 backdrop-blur-md overflow-x-auto lg:flex-col">
          {member.map((aslab, index) => (
            <div key={aslab.date} className="relative">
              <div
                aria-hidden="true"
                className={cn(
                  "absolute top-0 left-0 h-full rounded-full",
                  activeTab === index
                    ? "bg-base-foreground-100 w-0.5"
                    : "bg-base-foreground-100/10 w-px",
                )}
              />
              <button
                onClick={() => setActiveTab(index)}
                className={`text-left pl-5 ${
                  activeTab === index
                    ? "text-base-foreground-100 font-semibold"
                    : "text-base-500"
                }`}
              >
                <p className="text-sm">{aslab.anggota.length} Anggota</p>
                <time className="block text-xl">ASLAB {aslab.date}</time>
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
          {member[activeTab].anggota
            .toSorted((a, b) => a.name.localeCompare(b.name))
            .map((person) => (
              <article
                key={person.name}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-static-900 px-6 pt-80 pb-6 sm:pt-48 lg:pt-64 dark:bg-static-800"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  fill
                  className="absolute inset-0 -z-10 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-static-900 via-static-900/20 dark:from-base-foreground-100/30 dark:via-base-ffrom-base-foreground-100/20" />
                <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-static-900/10 dark:inset-ring-base-50/10" />

                <h3 className="mt-3 text-lg/6 font-semibold text-static-100">
                  <span className="absolute inset-0" />
                  {person.name}
                </h3>
                <p className="text-static-200 mt-2">Asisten Lab</p>
              </article>
            ))}
        </div>
      </div>
    </>
  );
}
