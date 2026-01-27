import { Container } from "@/components/container";
import { Figure } from "@/components/figure";
import { SectionHeader } from "@/components/heading";

export default function Page() {
  return (
    <>
      <SectionHeader
        eyebrow="Denah"
        title="Denah Laboratorium"
        description="Informasi tata letak fasilitas Laboratorium Teknik Informatika di Gedung C."
        className="mt-24 py-10"
      />

      <Container as="section" className="w-full bg-transparent px-4 mb-24 sm:px-6 lg:px-8">
        <Figure
          image="/images/denah_lab.webp"
          caption="Denah Lantai 8 Gedung C, Kampus Viktor, Program Studi Teknik Informatika Universitas Pamulang."
        />
      </Container>
    </>
  );
}