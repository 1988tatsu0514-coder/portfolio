const clients = [
  "SHONAN UNITED BC",
  "HACHIOJI BEE TRAINS",
  "BEEFMAN YOKOHAMA",
  "GOLD EYES BASEBALL",
  "CHIGASAKI CITY",
  "RAMU TOKACHIKI",
  "HARUMI SAKAI",
  "AIKA OKAZAKI",
];

export default function Clients() {
  return (
    <section className="px-8 md:px-24 py-40 border-t border-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-600">
            Clients & Athletes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {clients.map((client) => (
            <div key={client} className="group flex items-center">
              <span className="text-xs tracking-[0.15em] uppercase text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300 cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
