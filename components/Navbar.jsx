import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-none px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Vishnu Siddhi Nursery"
            width={62}
            height={46}
            className="h-11 w-14 object-contain"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold tracking-[.25em] gold-text">VSN</div>
            <div className="text-[10px] uppercase tracking-[.18em] text-white/60">
              Vishnu Siddhi Nursery
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-5 text-xs uppercase tracking-[.18em] text-white/75 md:gap-8 md:text-sm">
          <Link className="transition hover:text-[#c7a35a]" href="/">Home</Link>
          <Link className="transition hover:text-[#c7a35a]" href="/about">About</Link>
          <Link className="transition hover:text-[#c7a35a]" href="/plants">Plants</Link>
          <Link className="transition hover:text-[#c7a35a]" href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
