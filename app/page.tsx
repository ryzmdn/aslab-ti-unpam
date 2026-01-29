import { Container } from "@/components/container";
import { Figure } from "@/components/figure";
import { SectionHeader } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ui/contact-card";
import { CourseCard } from "@/components/ui/course-card";
import { RoomCard } from "@/components/ui/room-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { activities, contacts, courses, rooms } from "@/constants";
import { ActivityItem } from "@/types";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    src: "/images/asistensi/asistensi-algoritma-pemrograman.webp",
    alt: "Kegiatan asistensi laboratorium mata kuliah algoritma dan pemrograman",
  },
  {
    src: "/images/asistensi/asistensi-basis-data.webp",
    alt: "Kegiatan asistensi laboratorium mata kuliah basis data",
    offset: true,
  },
  {
    src: "/images/asistensi/asistensi-data-mining.webp",
    alt: "Kegiatan asistensi laboratorium mata kuliah data mining",
  },
  {
    src: "/images/asistensi/asistensi-mobile-programming.webp",
    alt: "Kegiatan asistensi laboratorium mata kuliah mobile programming",
    offset: true,
  },
];

function HeroContent() {
  return (
    <Container
      as="section"
      className="relative w-full lg:max-w-3xl xl:max-w-3xl"
    >
      <a
        href="https://github.com/asistenlabunpam"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center w-max rounded-full bg-base-50 mb-5 px-2 py-1 text-sm text-base-foreground-400 border border-base-200"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="size-5">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="mx-2 h-4 w-px bg-base-200" />
        Kunjungi repositori open source GitHub ASLAB
        <ChevronRight className="group-hover:translate-x-1 ml-1.5 size-3.5" />
      </a>

      <h1 className="text-5xl font-semibold tracking-tight text-base-foreground-100 max-w-2xl lg:text-6xl lg:max-w-none">
        Asisten Laboratorium{" "}
        <span className="text-base-foreground-300">Universitas Pamulang</span>
      </h1>

      <p className="mt-8 text-sm/6 text-base-foreground-400 sm:text-base/7 sm:max-w-xl">
        Website ini digunakan untuk memberikan informasi resmi terkait kegiatan
        Laboratorium Teknik Informatika Universitas Pamulang seperti kegiatan
        asistensi, jadwal penggunaan lab, peraturan penggunaan lab, modul
        praktikum, struktur organisasi, serta berita acara.
      </p>

      <div className="mt-10 flex items-center gap-x-4">
        <Button size="lg" className="rounded-full" asChild>
          <Link href="#tentang">Tentang ASLAB</Link>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="gap-x-1.5 rounded-full"
          asChild
        >
          <Link href="/mata-kuliah">
            Mata Kuliah <ArrowUpRight className="size-3" />
          </Link>
        </Button>
      </div>
    </Container>
  );
}

function HeroGallery() {
  return (
    <Container
      as="section"
      className="grid w-full grid-cols-2 gap-2 py-20 lg:p-16"
    >
      {HERO_IMAGES.map((img) => (
        <div
          key={img.src}
          className={`relative aspect-square overflow-hidden rounded-lg ${
            img.offset ? "-mt-3.5" : ""
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </Container>
  );
}

function About() {
  return (
    <>
      <h2 className="scroll-m-20 text-3xl font-semibold text-base-foreground-100 tracking-tight first:mt-0">
        Tentang Kami
      </h2>

      <Container
        as="section"
        className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row"
      >
        <div className="space-y-8 lg:w-full lg:max-w-3xl lg:flex-auto xl:max-w-4xl">
          <p className="text-xl/8 text-base-foreground-400">
            Asisten Laboratorium Teknik Informatika adalah tim pendukung
            praktikum di lingkungan kampus yang terdiri dari mahasiswa terpilih
            melalui proses seleksi ketat. Mereka memiliki komitmen tinggi
            terhadap tanggung jawab akademik dan organisasi, serta berperan
            membantu dosen dalam pelaksanaan praktikum.
          </p>
          <p className="text-base/7 text-base-foreground-300">
            Tugas utama aslab meliputi membimbing peserta praktikum dalam
            memahami materi dan instruksi, menjawab pertanyaan teknis mahasiswa,
            serta menyiapkan peralatan, komputer, software, dan jaringan sebelum
            praktikum dimulai. Selain itu, aslab juga mengawasi jalannya
            kegiatan praktikum untuk memastikan aturan laboratorium dipatuhi dan
            penggunaan peralatan berlangsung aman. Mereka turut bertanggung
            jawab dalam pemeliharaan peralatan dan software agar tetap berfungsi
            dengan baik, serta membantu pencatatan inventaris laboratorium.
          </p>
        </div>

        <div className="lg:flex lg:flex-auto lg:justify-center">
          <dl className="flex items-center gap-x-10 gap-y-8 w-full lg:flex-col lg:items-start lg:w-64 xl:w-80">
            {[
              { label: "Asisten Laboratorium", value: 0 },
              { label: "Ruang Laboratorium", value: 0 },
              { label: "Mata Kuliah", value: 0 },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-y-3 pl-7 border-l border-base-300"
              >
                <dt className="text-base/7 text-base-foreground-400">
                  {stat.label}
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-base-foreground-200">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <Container
        as="section"
        className="flow-root space-y-10 my-8 py-8 w-full max-w-3xl"
      >
        <div className="bg-base-50 space-y-5 h-max">
          <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
            Visi Kami
          </h3>
          <p className="text-base/7 text-base-foreground-400">
            Menjadi pendukung kegiatan mahasiswa dengan perkuliahan berbasis
            praktik pada Program Studi Teknik Informatika Universitas Pamulang,
            guna mendorong kemajuan belajar dan inovasi di lingkungan kampus.
          </p>
        </div>
        <div className="bg-base-50 space-y-5 h-max">
          <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
            Misi Kami
          </h3>
          <ol className="list-decimal text-base/7 text-base-foreground-400 ml-6 [&>li]:mt-2">
            <li>
              Memberikan dukungan teknis dan sumber daya perkuliahan berbasis
              praktik yang dibutuhkan oleh mahasiswa dan dosen.
            </li>
            <li>
              Membangun komunitas belajar yang ramah, di mana setiap anggota
              dapat saling berbagi pengetahuan.
            </li>
            <li>
              Menyelenggarakan pelatihan dan workshop untuk meningkatkan
              keterampilan teknis dan profesionalisme anggota.
            </li>
            <li>
              Menyediakan akses mudah untuk informasi terkait penggunaan lab dan
              kegiatan perkuliahan berbasis praktikum.
            </li>
            <li>
              Aktif berkontribusi menjalin kerjasama pada berbagai kegiatan di
              program studi teknik informatika.
            </li>
          </ol>
        </div>
      </Container>
    </>
  );
}

function Course() {
  return (
    <Container
      as="section"
      className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-3"
    >
      {courses.map((course) => (
        <CourseCard
          key={course.name}
          name={course.name}
          description={course.description}
          semester={course.semester}
          sks={course.sks}
          icon={course.icon}
        />
      ))}
    </Container>
  );
}

function Laboratory() {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 px-4 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {rooms.map((room) => (
        <RoomCard
          key={room.number}
          number={room.number}
          code={room.code}
          image={room.image}
          description={room.description}
          location={room.location}
        />
      ))}
    </Container>
  );
}

function ActivityGrid({ items }: { items: ActivityItem[] }) {
  if (!items.length) {
    return (
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Belum ada aktivitas
      </p>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Figure
          key={item.src}
          image={item.src}
          imageWrapperClassName="aspect-video"
          imageProps={{ fill: true }}
          caption={item.caption}
        />
      ))}
    </div>
  );
}

function Activity() {
  return (
    <Container as="section" className="mx-auto">
      <Tabs defaultValue="semua">
        <TabsList variant="line" className="mx-auto">
          <TabsTrigger value="semua">Semua</TabsTrigger>
          <TabsTrigger value="kegiatan">Kegiatan</TabsTrigger>
          <TabsTrigger value="asistensi">Asistensi</TabsTrigger>
        </TabsList>

        <TabsContent value="semua">
          <ActivityGrid items={activities} />
        </TabsContent>

        <TabsContent value="kegiatan">
          <ActivityGrid
            items={activities.filter((item) => item.category === "kegiatan")}
          />
        </TabsContent>

        <TabsContent value="asistensi">
          <ActivityGrid
            items={activities.filter((item) => item.category === "asistensi")}
          />
        </TabsContent>
      </Tabs>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Container
        as="div"
        className="relative px-4 py-24 grid grid-cols-1 place-items-center sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-20"
      >
        <HeroContent />
        <HeroGallery />
      </Container>

      <Container as="div" className="px-4 sm:px-6 lg:px-8 lg:py-10">
        <About />
      </Container>

      <Container as="div" className="space-y-12 px-4 sm:px-6 lg:px-8 lg:py-10">
        <SectionHeader
          eyebrow="Kurikulum Praktikum"
          title="Mata Kuliah Laboratorium"
          description="Daftar mata kuliah berbasis praktikum yang dirancang untuk menyelaraskan teori akademik dengan implementasi teknologi terkini di industri."
        />
        <Course />
      </Container>

      <Container as="div" className="space-y-12 px-4 sm:px-6 lg:px-8 lg:py-10">
        <SectionHeader
          eyebrow="Aktivitas Lab"
          title="Kegiatan & Dokumentasi"
          description="Potret kesibukan mahasiswa dalam mengeksplorasi teknologi, mulai dari sesi praktikum terjadwal hingga kolaborasi riset dan pengembangan inovasi digital."
        />
        <Activity />
      </Container>

      <Container as="div" className="space-y-12 px-4 sm:px-6 lg:px-8 lg:py-10">
        <SectionHeader
          eyebrow="Fasilitas Unggulan"
          title="Ruang Laboratorium Terpadu"
          description="Eksplorasi berbagai ruang laboratorium spesifik yang dilengkapi dengan infrastruktur mutakhir untuk mendukung kegiatan praktikum, riset, dan inovasi mahasiswa."
        />
        <Laboratory />
      </Container>

      <Container
        as="section"
        className="space-y-12 px-4 mb-10 pb-10 sm:px-6 lg:px-8 lg:py-10"
      >
        <SectionHeader
          eyebrow="Layanan Bantuan"
          title="Kontak Pengelola Lab"
          description="Hubungi tim teknis atau administrasi kami untuk informasi terkait peminjaman ruang, kendala fasilitas, atau konsultasi kegiatan praktikum."
        />

        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {contacts.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </ul>
      </Container>
    </>
  );
}
