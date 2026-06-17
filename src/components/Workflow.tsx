const steps = [
  {
    name: "KICK-OFF",
    description:
      "クライアントのビジョンとプロジェクト要件を把握するための打ち合わせ。目標・ターゲット・納期を確認し、映像の方向性を定める。",
  },
  {
    name: "PRE-PRODUCTION",
    description:
      "撮影コンセプト・構成・スケジュールを策定。ロケハンを実施し、最高の映像を生み出すための準備を徹底する。",
  },
  {
    name: "PRODUCTION",
    description:
      "Sony FX3とジンバルを駆使し、アスリートの一瞬の輝きと躍動感を現場で撮影。クライアントのビジョンを映像で実現する。",
  },
  {
    name: "POST-PRODUCTION",
    description:
      "映像編集・カラーグレーディング・サウンドデザインを実施。シネマティックな世界観を丁寧に仕上げる。",
  },
  {
    name: "DELIVERY",
    description:
      "最終映像を納品。クライアントの期待を超えるクオリティを目指し、修正対応も迅速に行う。",
  },
];

export default function Workflow() {
  return (
    <section className="px-8 md:px-24 py-12 md:py-40 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">

        {/* ヘッダー */}
        <div className="flex items-center gap-5 mb-10 md:mb-20">
          <span className="text-neutral-900 text-2xl font-light">→</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.15em] text-neutral-900">
            WORKFLOW
          </h2>
        </div>

        {/* ステップ一覧 */}
        <div>
          {steps.map((step) => (
            <div
              key={step.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 py-6 md:py-14 border-t border-neutral-200 items-start"
            >
              <h3 className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-none">
                {step.name}
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-light leading-[2.2] md:pt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
