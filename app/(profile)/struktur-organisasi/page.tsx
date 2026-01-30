import { Container } from "@/components/container";
import { Figure } from "@/components/figure";
import { SectionHeader } from "@/components/heading";

export default function Page() {
  return (
    <>
      <SectionHeader
        eyebrow="Manajemen"
        title="Struktur Organisasi"
        description="Susunan pengelola Laboratorium Teknik Informatika yang berdedikasi dalam menjamin kualitas layanan praktikum dan pengembangan teknologi."
        className="mt-24 py-10"
      />

      <Container
        as="section"
        className="w-full max-w-4xl mx-auto text-center bg-transparent px-4 mb-24 sm:px-6 lg:px-8"
      >
        <div>
          <img
            src="/images/struktur_organisasi.webp"
            alt="Bagan Struktur Organisasi Laboratorium Teknik Informatika Universitas Pamulang."
            loading="lazy"
            className="aspect-auto mx-auto"
          />
          <p className="w-full mt-10 text-base-foreground-400">
            Bagan Struktur Organisasi Laboratorium Teknik Informatika
            Universitas Pamulang.
          </p>
        </div>
      </Container>
    </>
  );
}
