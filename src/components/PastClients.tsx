const clients = [
  "SHONAN UNITED BC",
  "HACHIOJI BEE TRAINS",
  "BEEFMAN YOKOHAMA",
  "GOLD EYES BASEBALL",
  "CHIGASAKI CITY",
  "YUTO TOKASHIKI",
  "HARUNA OKAZAKI",
  "YOSHINOBU TAKAMATSU",
  "AIKI TANNO",
  "IBUKI OKU",
  "HARUMI SAKAI",
  "ICE CLIMBER // REO YAGI",
  "TRACK AND FIELD // KANTA TANIZAKI",
  "KANAGAWA VANGUARDS",
  "PARKOUR // TAIGA TASHIRO",
];

export default function PastClients() {
  return (
    <section className="px-8 md:px-24 py-16 md:py-40 border-t border-neutral-950">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-baseline justify-between mb-10 md:mb-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-neutral-500" />
            <p className="text-xs tracking-[0.25em] uppercase text-white">
              Clients &amp; Athletes
            </p>
          </div>
          <p className="text-xs tracking-[0.25em] uppercase text-white/60">
            {clients.length} Collaborations
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-3 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-8">
          {clients.map((client) => (
            <div key={client} className="group">
              <span className="text-[10px] md:text-xs tracking-[0.08em] md:tracking-[0.12em] uppercase font-light text-white opacity-20 group-hover:opacity-100 transition-all duration-300 cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
