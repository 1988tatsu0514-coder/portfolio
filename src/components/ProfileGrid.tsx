export default function ProfileGrid() {
  return (
    <section className="px-8 md:px-24 py-16 md:py-32 border-t border-neutral-950">
      <div className="max-w-7xl mx-auto">

        {/* 写真（モバイルのみ表示） */}
        <div
          className="md:hidden w-full aspect-[4/5] bg-cover bg-top bg-no-repeat bg-neutral-950 mb-6"
          style={{ backgroundImage: "url('/images/IMG_1316_Original%202.jpg')" }}
        />

        {/* 上段：写真(PC) + Roles / Skills / Interests */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-12 mb-6 md:mb-8">

          <div
            className="hidden md:block w-full aspect-[3/4] bg-cover bg-top bg-no-repeat bg-neutral-950"
            style={{ backgroundImage: "url('/images/IMG_1316_Original%202.jpg')" }}
          />

          <div>
            <h3 className="text-sm md:text-2xl font-black uppercase">Roles</h3>
            <p className="text-[10px] text-white/60 mb-3 mt-1">役割</p>
            <ul className="space-y-2 text-[10px] md:text-xs text-white font-light leading-loose">
              <li>Video Producer<span className="block text-white/60 text-[9px]">動画プロデューサー</span></li>
              <li>Film Editor<span className="block text-white/60 text-[9px]">映像編集</span></li>
              <li>Video Team Leader<span className="block text-white/60 text-[9px]">動画チームリーダー</span></li>
              <li>Content Creator<span className="block text-white/60 text-[9px]">コンテンツ制作</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-2xl font-black uppercase">Skills</h3>
            <p className="text-[10px] text-white/60 mb-3 mt-1">得意分野</p>
            <ul className="space-y-2 text-[10px] md:text-xs text-white font-light leading-loose">
              <li>Sports Doc<span className="block text-white/60 text-[9px]">スポーツドキュメンタリー</span></li>
              <li>Commercial<span className="block text-white/60 text-[9px]">プロモーション映像</span></li>
              <li>Color Grading<span className="block text-white/60 text-[9px]">カラーグレーディング</span></li>
              <li>Gimbal<span className="block text-white/60 text-[9px]">ジンバル撮影</span></li>
              <li>Editing<span className="block text-white/60 text-[9px]">映像編集</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-2xl font-black uppercase">Interests</h3>
            <p className="text-[10px] text-white/60 mb-3 mt-1">興味・関心</p>
            <ul className="space-y-2 text-[10px] md:text-xs text-white font-light leading-loose">
              <li>Sports<span className="block text-white/60 text-[9px]">スポーツ全般</span></li>
              <li>Documentary<span className="block text-white/60 text-[9px]">ドキュメンタリー</span></li>
              <li>Action Sports<span className="block text-white/60 text-[9px]">アクションスポーツ</span></li>
              <li>Athlete Stories<span className="block text-white/60 text-[9px]">アスリートの物語</span></li>
              <li>Storytelling<span className="block text-white/60 text-[9px]">ストーリーテリング</span></li>
            </ul>
          </div>
        </div>

        {/* 下段：Software / Links / Based In */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-12 mb-6 md:mb-12">

          <div className="hidden md:block" />

          <div>
            <h3 className="text-sm md:text-2xl font-black uppercase">Software</h3>
            <p className="text-[10px] text-white/60 mb-3 mt-1">機材・ソフト</p>
            <ul className="space-y-2 text-[10px] md:text-xs text-white font-light leading-loose">
              <li>Final Cut Pro X</li>
              <li>Sony FX3<span className="block text-white/60 text-[9px]">メインカメラ</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-2xl font-black uppercase">Links</h3>
            <p className="text-[10px] text-white/60 mb-3 mt-1">リンク</p>
            <ul className="space-y-2 text-[10px] md:text-xs font-light leading-loose">
              <li>
                <a href="https://www.instagram.com/tatsubow2023" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-white/60 transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://vimeo.com/user245591486" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-white/60 transition-colors duration-300">
                  Vimeo
                </a>
              </li>
              <li>
                <a href="mailto:1988tatsu0514@gmail.com"
                  className="text-white hover:text-white/60 transition-colors duration-300">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-2xl font-black uppercase">Based In</h3>
            <p className="text-[10px] text-white/60 mb-3 mt-1">拠点</p>
            <ul className="space-y-2 text-[10px] md:text-xs text-white font-light leading-loose">
              <li>Kanagawa, Japan<span className="block text-white/60 text-[10px]">神奈川県</span></li>
              <li>Shonan<span className="block text-white/60 text-[10px]">湘南エリア</span></li>
            </ul>
          </div>
        </div>

        {/* タグライン */}
        <div className="border-t border-neutral-900 py-6">
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-white/60 uppercase">
            |VIDEO PRODUCER|FILM EDITOR|VIDEO TEAM LEADER|CONTENT CREATOR|
          </p>
        </div>

        {/* About me + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 pt-8">
          <div>
            <h3 className="text-xl md:text-3xl font-black uppercase">About me</h3>
            <p className="text-xs text-white/60 mb-5 mt-1">プロフィール</p>
            <p className="text-xs text-white font-light leading-[2.2]">
              12年間の消防士としてのキャリアを経て、映像の世界へ転身。
              命がけの現場で培った一瞬の緊迫感や人間の本質的な熱量を見極める洞察力を武器に、
              スポーツ・アスリートの生のエネルギーをシネマティックに切り取るビデオプロデューサー。
              Bリーグをはじめとするスポーツチームの
              プロモーション映像・ドキュメンタリーをワンストップで手掛けています。
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-black uppercase">Contact</h3>
            <p className="text-xs text-white/60 mb-5 mt-1">お問い合わせ</p>
            <p className="text-xs text-white font-light leading-[2.2]">
              1988tatsu0514@gmail.com<br />
              instagram.com/tatsubow2023<br />
              vimeo.com/user245591486<br />
              神奈川県 — 湘南
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
