export default function AboutContact() {
  return (
    <section id="contact" className="relative w-full h-screen overflow-hidden">

      {/* 背景：ポートレート写真 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/IMG_2639%202.JPG')",
          backgroundPosition: "center 80%",
          filter: "brightness(80%) grayscale(15%)",
        }}
      />

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {/* 見出し：屋根ゾーン */}
      <div className="absolute top-[32%] md:top-12 left-0 right-0 z-10 flex flex-col items-center text-center px-8">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-tight">
          Let&apos;s<br />collaborate
        </h2>
      </div>

      {/* 下部：リンク3つ + 名前情報 */}
      <div className="absolute bottom-8 left-8 right-8 z-10">

        {/* リンク3つ：中央 */}
        <div className="flex justify-center gap-10 mb-8">
          <a
            href="https://www.instagram.com/tatsubow2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.25em] uppercase text-white hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://vimeo.com/user245591486"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.25em] uppercase text-white hover:text-white transition-colors duration-300"
          >
            Vimeo
          </a>
          <a
            href="mailto:1988tatsu0514@gmail.com"
            className="text-xs tracking-[0.25em] uppercase text-white hover:text-white transition-colors duration-300"
          >
            Email
          </a>
        </div>

        {/* 名前 + メール */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-white tracking-[0.15em] uppercase">
              Tatsunosuke Nishimura
            </p>
            <p className="text-xs text-white/70 tracking-[0.15em] uppercase mt-1">
              Flare Motion
            </p>
          </div>
          <p className="text-xs text-white/50 tracking-[0.1em] uppercase">
            © 2025 Flare Motion
          </p>
        </div>

      </div>

    </section>
  );
}
