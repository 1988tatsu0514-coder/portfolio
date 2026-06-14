export default function FeatureImage() {
  return (
    <section className="relative w-full h-[70vh] md:h-screen bg-neutral-950 overflow-hidden">

      {/* 背景写真 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/IMG_2638_Original.jpg')",
          filter: "grayscale(60%) contrast(110%) brightness(110%)",
        }}
      />

      {/* 暗めオーバーレイ */}
      <div className="absolute inset-0 bg-black/25" />

      {/* ===== 上部ヘッダー ===== */}
      <div className="absolute top-0 left-0 right-0 px-8 md:px-24 pt-10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white/60" />
              <p className="text-xs tracking-[0.35em] uppercase text-white/60">
                Flare Motion
              </p>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Issue No. 001 &nbsp;—&nbsp; 2025
            </p>
          </div>
        </div>
      </div>

      {/* ===== 右側 縦テキスト（PCのみ） ===== */}
      <div className="hidden md:flex absolute right-24 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-neutral-500"
          style={{ writingMode: "vertical-rl" }}
        >
          Sports Documentary
        </p>
        <div className="w-px h-16 bg-neutral-700" />
      </div>

      {/* ===== 下部：メインタイポグラフィ ===== */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-24 pb-10 md:pb-14 z-10">
        <div className="max-w-7xl mx-auto w-full">

          {/* アクセントライン + ラベル */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-neutral-600" />
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Vol. 2025 &nbsp;·&nbsp; Director / Cinematographer
            </p>
          </div>

          {/* メイン見出し */}
          <h2 className="text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none">
            SPORTS
            <br />
            CINEMA&shy;TOGRAPHY
          </h2>

          {/* 下部サブテキスト */}
          <div className="mt-5 flex items-end justify-between gap-8">
            <p className="text-xs tracking-[0.15em] uppercase text-white/40 leading-[2]">
              Capturing the raw energy, passion &amp; stories
              <br />
              behind every athlete and team.
            </p>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-600 hidden md:block flex-shrink-0">
              Tatsunosuke Nishimura
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
