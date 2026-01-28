import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { RecruitmentCard } from "@/components/ui/recruitment-card";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface RecruitmentData {
  poster: string;
  name: string;
  date: {
    from: string;
    to: string;
  };
  dialog: {
    title: string;
    description?: string;
    content: ReactNode;
    ctaLabel?: string;
  };
}

export const recruitment: RecruitmentData[] = [
  {
    poster: "/images/oprec_1.webp",
    name: "Open Recruitment Asisten Laboratorium 2025 – 2026",
    date: {
      from: "2025-02-01",
      to: "2025-12-01",
    },
    dialog: {
      title: "Asisten Laboratorium",
      description: "Kesempatan menjadi bagian dari tim laboratorium periode 2025 – 2026",
      content: (
        <>
          <div className="w-full text-base-foreground-400 text-base/7">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-base-foreground-200">Persyaratan</h3>
            <ul className="mt-3 mb-6 ml-6 list-disc [&>li]:mt-2">
              <li>Mahasiswa aktif semester 3 &ndash; 5.</li>
              <li>IPK minimal 3.00.</li>
              <li>Bersedia mengikuti proses seleksi bertahap.</li>
              <li>Memiliki dedikasi tinggi dan motivasi yang kuat.</li>
            </ul>
          </div>

          <div className="w-full text-base-foreground-400 text-base/7">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-base-foreground-200">Benefit</h3>
            <ul className="mt-3 mb-6 ml-6 list-disc [&>li]:mt-2">
              <li>Menambah value untuk pengalaman kerja.</li>
              <li>Kesempatan mengembangkan softskill dan hardskill.</li>
              <li>Partisipasi dalam penelitian dan project.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <Button size="lg" disabled>Pendaftaran Ditutup</Button>
          </div>
        </>
      ),
      ctaLabel: "Detail Oprec",
    },
  },
];

export default function Page() {
  return (
    <>
      <SectionHeader
        eyebrow="Rekrutmen"
        title="Informasi Recruitments"
        description="Daftar kesempatan bergabung dalam berbagai kegiatan dan organisasi"
        className="mt-20"
      />

      <Container
        as="section"
        className="grid grid-cols-1 gap-6 my-10 px-4 py-10 sm:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8"
      >
        {recruitment.map((item, index) => (
          <RecruitmentCard
            key={index}
            poster={item.poster}
            name={item.name}
            dateFrom={item.date.from}
            dateTo={item.date.to}
            dialog={item.dialog}
          />
        ))}
      </Container>
    </>
  );
}
