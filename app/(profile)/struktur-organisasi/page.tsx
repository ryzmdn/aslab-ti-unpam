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
        <Figure
          image="/images/struktur_organisasi.webp"
          imageProps={{
            width: "400",
            height: "800",
            className: "mx-auto"
          }}
          captionClassName="justify-center mt-10"
          caption="Bagan Struktur Organisasi Laboratorium Teknik Informatika Universitas Pamulang."
        />
      </Container>
    </>
  );
}
