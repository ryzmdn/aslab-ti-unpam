import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { Info } from "lucide-react";

export default function Page() {
  return (
    <Container as="div" className="w-full max-w-5xl mx-auto space-y-10 py-5">
      <SectionHeader
        eyebrow="Penjadwalan"
        title="Jadwal Asisten Laboratorium"
        description="Informasi lengkap jadwal operasional dan tugas asisten di Lab Universitas Pamulang untuk kelas Reguler."
        className="mt-16"
      />
      <Container as="section" className="w-full">
        <iframe
          data-testid="embed-iframe"
          src={`${process.env.NEXT_PUBLIC_JADWAL}/pubhtml?widget=true&amp;headers=false&chrome=false`}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full h-128 border-0 ring-1 ring-base-200 rounded"
        />
        <div className="flex items-center gap-x-1.5 mt-4">
          <Info className="size-3.5" />
          <p className="text-sm/6 text-base-foreground-400">
            Menampilkan jadwal real-time tugas asisten laboratorium di
            lingkungan Universitas Pamulang.
          </p>
        </div>
      </Container>
    </Container>
  );
}
