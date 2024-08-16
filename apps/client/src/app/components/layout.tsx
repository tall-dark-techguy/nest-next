"use client";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-white rounded-lg p-4 mb-4">
        <nav className="flex items-center justify-center gap-x-4">
          <Link href="/">Home</Link>
          <Link href="/about-me">About Me</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </header>

      <main className="bg-white rounded-lg">{children}</main>
    </>
  );
}
