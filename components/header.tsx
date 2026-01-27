"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, X } from "lucide-react"
import { MobileMenu } from "./mobile-header";
import { Button } from "./ui/button";
import { MainNavigation } from "./navigation";

export function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-base-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden lg:block">
          <MainNavigation />
        </div>

        <div className="flex items-center gap-x-2">
          <AnimatedThemeToggler />

          <Button
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}

function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/logo.svg"
        alt="Logo Asisten Laboratorium Universitas Pamulang"
        width={120}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
