"use client";

import Link from "next/link"
import { Button } from "./ui/button"

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <nav className="lg:hidden absolute top-full inset-x-0 border-t bg-base-50 shadow-md">
      <ul className="flex flex-col gap-1 p-4">
        <MobileLink href="/" onClick={onClose}>
          Beranda
        </MobileLink>

        <MobileSection title="Profil">
          <MobileLink href="/asisten-laboratorium" onClick={onClose}>
            Asisten Laboratorium
          </MobileLink>
          <MobileLink href="/struktur-organisasi" onClick={onClose}>
            Struktur Organisasi
          </MobileLink>
        </MobileSection>

        <MobileSection title="Informasi">
          <MobileLink href="/standar-operasional-prosedur" onClick={onClose}>
            Standar Operasional Prosedur
          </MobileLink>
          <MobileLink href="/mata-kuliah" onClick={onClose}>
            Mata Kuliah
          </MobileLink>
          <MobileLink href="/denah-laboratorium" onClick={onClose}>
            Denah Laboratorium
          </MobileLink>
          <MobileLink href="/berita-acara" onClick={onClose}>
            Berita Acara
          </MobileLink>
          <MobileLink href="/recruitment" onClick={onClose}>
            Recruitment
          </MobileLink>
        </MobileSection>

        <MobileLink href="/kegiatan" onClick={onClose}>
          Kegiatan
        </MobileLink>

        <MobileLink href="/jadwal-laboratorium" onClick={onClose}>
          Jadwal
        </MobileLink>

        <MobileLink href="/kontak" onClick={onClose}>
          Kontak
        </MobileLink>
      </ul>
    </nav>
  )
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <li>
      <Button variant="ghost" className="justify-start w-full" asChild>
        <Link
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      </Button>
    </li>
  )
}

function MobileSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li>
      <p className="px-3 py-2 text-sm text-base-500">
        {title}
      </p>
      <ul className="ml-2 flex flex-col gap-1">{children}</ul>
    </li>
  )
}