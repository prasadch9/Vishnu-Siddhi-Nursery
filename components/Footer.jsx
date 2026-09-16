import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050705]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="gold-text text-xs uppercase tracking-[.3em]">VSN</p>
            <h3 className="mt-3 text-2xl font-semibold">Vishnu Siddhi Nursery</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              Curated greenery for refined spaces — from timeless bonsai to distinctive indoor plants.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[.25em] text-white/40">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/plants">Plant Collections</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[.25em] text-white/40">Visit / Enquire</p>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Speak with our nursery team for plant availability, bulk requirements and curated collections.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block border border-[#c7a35a]/50 px-5 py-3 text-xs uppercase tracking-[.2em] text-[#c7a35a] hover:bg-[#c7a35a] hover:text-black"
            >
              Contact VSN
            </Link>
          </div>
        </div>

        <div className="gold-line my-8 opacity-40" />
        <p className="text-xs text-white/35">© {new Date().getFullYear()} Vishnu Siddhi Nursery. All rights reserved.</p>
      </div>
    </footer>
  );
}
