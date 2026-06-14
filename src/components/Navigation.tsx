import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-6 bg-black/20 backdrop-blur-sm">
      <Link
        href="/"
        className="text-xs md:text-sm font-light tracking-[0.15em] md:tracking-[0.2em] uppercase text-white hover:text-white/60 transition-colors duration-300"
      >
        Tatsunosuke Nishimura
      </Link>
      <div className="flex gap-8">
        <Link
          href="#works"
          className="text-xs tracking-[0.25em] uppercase text-white hover:text-white transition-colors duration-300"
        >
          Works
        </Link>
        <Link
          href="#contact"
          className="text-xs tracking-[0.25em] uppercase text-white hover:text-white transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
