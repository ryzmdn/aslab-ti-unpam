import { Course } from "@/types";
import {
  BrainCircuit,
  Cloud,
  Code,
  CodeXml,
  Database,
  DatabaseZap,
  GitBranch,
  GitGraph,
  Globe,
  GlobeLock,
  Network,
  Pickaxe,
  Smartphone,
  Workflow,
} from "lucide-react";

export const courses: Course[] = [
  {
    name: "Algoritma dan Pemrograman 1",
    description:
      "Memberikan fondasi logika pemrograman menggunakan bahasa C++. Fokus pada sintaks dasar, tipe data, struktur kontrol (percabangan dan perulangan), serta konsep fungsi untuk memecahkan masalah komputasi sederhana.",
    semester: 1,
    sks: 3,
    icon: GitBranch,
  },
  {
    name: "Algoritma dan Pemrograman 2",
    description:
      "Lanjutan pemrograman C++ yang mendalami teknik pemecahan masalah kompleks. Mencakup materi rekursi, pointer, alokasi memori dinamis, serta pengenalan algoritma pengurutan (sorting) dan pencarian (searching).",
    semester: 3,
    sks: 3,
    icon: GitGraph,
  },
  {
    name: "Struktur Data",
    description:
      "Mempelajari pengorganisasian data secara efisien dalam memori. Mahasiswa mengimplementasikan Linked List, Stack, Queue, Tree, dan Graph menggunakan C++ serta menganalisis efisiensi algoritma (Big O).",
    semester: 3,
    sks: 3,
    icon: Workflow,
  },
  {
    name: "Machine Learning",
    description:
      "Mempelajari pengembangan sistem yang mampu belajar dari data. Fokus pada algoritma Supervised Learning (Klasifikasi & Regresi), Unsupervised Learning (Clustering), serta evaluasi akurasi model.",
    semester: 5,
    sks: 3,
    icon: BrainCircuit,
  },
  {
    name: "Data Mining",
    description:
      "Mempelajari teknik ekstraksi pengetahuan dari dataset besar. Mencakup preprocessing data, penemuan pola asosiasi, klasifikasi, dan teknik clustering untuk pengambilan keputusan strategis.",
    semester: 4,
    sks: 3,
    icon: Pickaxe,
  },
  {
    name: "Basis Data 1",
    description:
      "Dasar-dasar perancangan basis data relasional. Fokus pada pemodelan data (ERD), normalisasi, dan penguasaan bahasa SQL (DDL & DML) untuk memanipulasi data dalam sistem manajemen basis data.",
    semester: 4,
    sks: 3,
    icon: Database,
  },
  {
    name: "Basis Data 2",
    description:
      "Lanjutan administrasi basis data yang mencakup optimasi query, penggunaan stored procedures, triggers, keamanan data tingkat lanjut, serta pengenalan konsep database NoSQL.",
    semester: 6,
    sks: 3,
    icon: DatabaseZap,
  },
  {
    name: "Jaringan Komputer",
    description:
      "Membahas arsitektur komunikasi data berdasarkan model OSI dan TCP/IP. Mencakup pengalamatan IP, routing, switching, serta protokol jaringan untuk mendukung infrastruktur IT dan internet.",
    semester: 3,
    sks: 3,
    icon: Network,
  },
  {
    name: "Cloud Computing",
    description:
      "Mempelajari arsitektur layanan cloud (IaaS, PaaS, SaaS). Fokus pada virtualisasi, manajemen sumber daya awan, dan deployment aplikasi pada platform populer seperti AWS, Azure, atau GCP.",
    semester: 4,
    sks: 3,
    icon: Cloud,
  },
  {
    name: "Mobile Programming",
    description:
      "Pengembangan aplikasi untuk perangkat bergerak (Android/iOS). Mahasiswa mempelajari lifecycle aplikasi, desain UI/UX mobile, akses fitur perangkat, dan integrasi API untuk aplikasi mobile.",
    semester: 6,
    sks: 3,
    icon: Smartphone,
  },
  {
    name: "Pemrograman Web 1",
    description:
      "Fokus pada pengembangan sisi klien (Client-side scripting). Menguasai HTML5 untuk struktur, CSS3 untuk desain responsif, dan JavaScript murni untuk interaktivitas dasar halaman web.",
    semester: 5,
    sks: 3,
    icon: Globe,
  },
  {
    name: "Pemrograman Web 2",
    description:
      "Fokus pada pengembangan sisi server (Server-side scripting). Menggunakan framework web (seperti Laravel/Node.js), manajemen session, autentikasi, dan pembangunan RESTful API.",
    semester: 7,
    sks: 3,
    icon: GlobeLock,
  },
  {
    name: "Pemrograman 1",
    description:
      "Mempelajari konsep Pemrograman Berorientasi Objek (OOP) menggunakan Java. Fokus pada sintaks Java, class, object, inheritance, encapsulation, dan polymorphism menggunakan IDE NetBeans.",
    semester: 4,
    sks: 3,
    icon: Code,
  },
  {
    name: "Pemrograman 2",
    description:
      "Lanjutan pemrograman Java yang berfokus pada pembangunan aplikasi desktop berbasis GUI (Graphical User Interface) dan konektivitas basis data menggunakan JDBC.",
    semester: 6,
    sks: 3,
    icon: CodeXml,
  },
];
