export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-24 py-40 md:py-48 border-t border-neutral-950">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-600 mb-16">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-white mb-20 leading-[1.15]">
          プロジェクトの
          <br />
          ご相談はこちら
        </h2>

        <div className="space-y-8">
          <a href="mailto:1988tatsu0514@gmail.com" className="group inline-block">
            <span className="text-lg md:text-xl font-light text-neutral-400 group-hover:text-white transition-colors duration-300">
              1988tatsu0514@gmail.com
            </span>
            <span className="block w-0 h-px bg-white mt-1 transition-all duration-500 ease-out group-hover:w-full" />
          </a>

          <div className="flex gap-10 pt-2">
            <a
              href="https://www.instagram.com/tatsubow2023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase text-neutral-600 hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com/user245591486"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase text-neutral-600 hover:text-white transition-colors duration-300"
            >
              Vimeo
            </a>
          </div>
        </div>

        <div className="mt-40 pt-8 border-t border-neutral-950 flex items-center justify-between">
          <p className="text-xs text-neutral-800 tracking-[0.1em] uppercase">
            © 2025 Tatsunosuke Nishimura
          </p>
          <p className="text-xs text-neutral-800 tracking-[0.1em] uppercase">
            Director
          </p>
        </div>
      </div>
    </section>
  );
}
