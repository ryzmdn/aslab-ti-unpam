"use client";

import { useParams } from "next/navigation";
import {
  Camera,
  CircleQuestionMark,
  LayoutList,
  MapPin,
  TriangleAlert,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { rooms } from "@/constants";
import { Figure } from "@/components/figure";
import { ImageDialog } from "@/components/ui/image-dialog";

function getRoomById(id: number) {
  return rooms.find((r) => r.number === id);
}

function RoomNotFound({ id }: { id: number }) {
  return (
    <main className="mx-auto px-4 pt-14 pb-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Ruangan tidak ditemukan
      </h1>
      <p className="mt-4 text-gray-500">
        Ruang lab dengan nomor {id} tidak ada dalam database.
      </p>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-base-200 pt-10">
      <h3 className="scroll-m-20 text-xl font-semibold text-base-foreground-200">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function Page() {
  const { id } = useParams();
  const roomId = Number(id);
  const ruangan = getRoomById(roomId);

  if (!ruangan) return <RoomNotFound id={roomId} />;

  return (
    <div className="mx-auto mt-14 px-4 pt-14 pb-24 sm:px-6 sm:pt-16 sm:pb-32 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-10 xl:gap-x-16">
        <Figure
          image={ruangan.image || ""}
          imageProps={{ fill: true }}
          imageWrapperClassName="relative aspect-video"
          caption={`Gambar Lab Komputer ${ruangan.number} prodi teknik informatika universitas pamulang.`}
          className="lg:col-span-4 lg:row-end-1"
        />

        <div className="mt-14 sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0">
          <div className="flex flex-col">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/denah-laboratorium">
                    Ruangan Lab
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Lab {ruangan.number}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4">
              <h1 className="scroll-m-20 text-3xl text-base-foreground-100 font-semibold tracking-tight first:mt-0">
                Lab Informatika {ruangan.number}
              </h1>
              <div className="mt-2 flex items-center gap-x-2 text-base-foreground-400">
                <MapPin className="size-4" />
                <span>{ruangan.location}</span>
              </div>

              <h2 id="information-heading" className="sr-only">
                Informasi Ruangan
              </h2>
            </div>
          </div>

          <p className="mt-6 text-base/7 text-base-foreground-400">
            {ruangan.summary}
          </p>

          <Section title="Peraturan Lab">
            <ul className="text-base-foreground-400 my-5 ml-2 [&>li]:mt-2">
              {ruangan.regulation?.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <TriangleAlert className="mt-1 size-3 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
          <Tabs defaultValue="gambar">
            <TabsList
              variant="line"
              className="w-full border-b border-base-foreground-50/10"
            >
              <TabsTrigger value="gambar">
                <Camera className="size-4" />
                Galeri
              </TabsTrigger>
              <TabsTrigger value="fasilitas">
                <LayoutList className="size-4" />
                Fasilitas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="gambar">
              <div className="grid grid-cols-2 gap-2 py-6 sm:grid-cols-3">
                {ruangan.photos?.map((photo) => (
                  <ImageDialog key={photo} src={photo} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fasilitas">
              <ul className="text-base-foreground-400 text-sm/6 list-disc my-6 ml-6 [&>li]:mt-2 marker:text-base-400">
                {ruangan.facility?.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
