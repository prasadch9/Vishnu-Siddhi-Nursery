"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// ==========================================
// SELECT NAVBAR STYLE
// 1 = Classic Premium Navbar

const NAVBAR_STYLE = 1;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [plantsOpen, setPlantsOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setPlantsOpen(false);
  };


  if (NAVBAR_STYLE === 1) {
     return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto max-w-5xl rounded-2xl border border-[#c7a35a]/20 bg-[#07100a]/65 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.jpg"
            alt="Vishnu Siddhi Nursery"
            width={62}
            height={46}
            className="h-11 w-14 object-contain"
            />

            <div className="hidden sm:block">
              <p className="text-xs tracking-[.25em] text-[#c7a35a]">
                VSN
              </p>

              <p className="text-[10px] uppercase tracking-[.15em] text-white/50">
                Vishnu Siddhi Nursery
              </p>
            </div>
          </Link>

          {/* DESKTOP */}
          <div className="hidden items-center gap-2 md:flex">

            <Link
              href="/"
              className="rounded-xl px-4 py-3 text-xs uppercase tracking-[.18em] text-white/70 transition hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-xl px-4 py-3 text-xs uppercase tracking-[.18em] text-white/70 transition hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              About
            </Link>

            <Link
              href="/plants"
              className="rounded-xl px-4 py-3 text-xs uppercase tracking-[.18em] text-white/70 transition hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              Plants
            </Link>

            <Link
              href="/contact"
              className="rounded-xl px-4 py-3 text-xs uppercase tracking-[.18em] text-white/70 transition hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c7a35a]/30 bg-[#c7a35a]/5 text-[#c7a35a] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            open ? "max-h-96 pt-4" : "max-h-0"
          }`}
        >
          <div className="rounded-xl border border-white/10 bg-black/20 p-2">

            <Link
              href="/"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-4 text-sm uppercase tracking-[.2em] text-white/75 hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-4 text-sm uppercase tracking-[.2em] text-white/75 hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              About
            </Link>

            <Link
              href="/plants"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-4 text-sm uppercase tracking-[.2em] text-white/75 hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              Plants
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-4 text-sm uppercase tracking-[.2em] text-white/75 hover:bg-[#c7a35a]/10 hover:text-[#c7a35a]"
            >
              Contact
            </Link>

          </div>
        </div>

      </nav>
    </header>
  );
}
}