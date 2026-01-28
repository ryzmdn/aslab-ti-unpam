import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { CourseCard } from "@/components/ui/course-card";
import { courses } from "@/constants";

export default function Page() {
  return (
    <Container as="div" className="space-y-12 mt-24 px-4 sm:px-6 lg:px-8 lg:py-10">
      <SectionHeader
        eyebrow="Kurikulum Praktikum"
        title="Mata Kuliah Laboratorium"
        description="Daftar mata kuliah berbasis praktikum yang dirancang untuk menyelaraskan teori akademik dengan implementasi teknologi terkini di industri."
      />
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
    </Container>
  );
}
