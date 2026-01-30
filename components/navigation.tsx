"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const PROFILE_MENU = [
  {
    title: "Asisten Laboratorium",
    href: "/asisten-laboratorium",
    description:
      "Informasi anggota Asisten Laboratorium di lingkungan Fakultas Teknik.",
  },
  {
    title: "Struktur Organisasi",
    href: "/struktur-organisasi",
    description: "Susunan organisasi Laboratorium Komputer.",
  },
];

const INFO_MENU = [
  {
    title: "Standar Operasional Prosedur",
    href: "/sop",
    description:
      "Pedoman dan tata cara operasional Laboratorium Komputer untuk menjamin kelancaran dan keamanan kegiatan.",
  },
  {
    title: "Mata Kuliah",
    href: "/mata-kuliah",
    description:
      "Daftar mata kuliah praktikum yang diselenggarakan dan dilaksanakan di Laboratorium Komputer.",
  },
  {
    title: "Denah Laboratorium",
    href: "/denah-laboratorium",
    description:
      "Informasi tata letak ruang dan fasilitas Laboratorium Komputer.",
  },
  {
    title: "Berita Acara",
    href: "/berita-acara",
    description:
      "Dokumentasi dan laporan resmi pelaksanaan kegiatan dan kejadian di Laboratorium Komputer.",
  },
  {
    title: "Recruitment",
    href: "/recruitment",
    description:
      "Informasi pendaftaran dan seleksi calon Asisten Laboratorium.",
  },
];

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavLink href="/">Beranda</NavLink>

        <NavDropdown title="Profil" items={PROFILE_MENU} />
        <NavDropdown title="Informasi" items={INFO_MENU} />

        <NavLink href="/jadwal-laboratorium">Jadwal</NavLink>
        <NavLink href="/kontak">Kontak</NavLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavDropdown({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-96 space-y-1 p-2">
          {items.map((item) => (
            <NavDropdownItem key={item.href} {...item} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function NavDropdownItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block rounded-md p-3 text-sm transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <div className="font-medium leading-none">{title}</div>
          <p className="mt-1 line-clamp-2 text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}