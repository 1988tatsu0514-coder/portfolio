import { WorkCard } from "./WorkCard";

interface Work {
  vimeoId: string;
  title: string;
  role: string;
  year: string;
}

const worksData: Work[] = [
  { vimeoId: "1092687048", title: "SHONAN UNITED BC", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1200967779", title: "HACHIOJI BEE TRAINS", role: "Cinematographer / Editor", year: "2025" },
  { vimeoId: "1118628644", title: "BEEFMAN YOKOHAMA", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1123818877", title: "GOLD EYES BASEBALL", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1092687048", title: "CHIGASAKI CITY", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1140635368", title: "YUTO TOKASHIKI", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1200964042", title: "HARUNA OKAZAKI", role: "Cinematographer / Editor", year: "2025" },
  { vimeoId: "1110234413", title: "YOSHINOBU TAKAMATSU", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1119746697", title: "AIKI TANNO", role: "Cinematographer / Editor", year: "2024" },
  { vimeoId: "1200971063", title: "IBUKI OKU", role: "Cinematographer / Editor", year: "2025" },
  { vimeoId: "1119705159", title: "HARUMI SAKAI", role: "Cinematographer / Editor", year: "2024" },
];

async function getVimeoThumbnail(vimeoId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    const url: string = data.thumbnail_url ?? "";
    return url.replace(/_\d+x\d+/, "_1280x720");
  } catch {
    return "";
  }
}

export default async function SelectedWorks() {
  const works = await Promise.all(
    worksData.map(async (work) => ({
      ...work,
      thumbnail: await getVimeoThumbnail(work.vimeoId),
    }))
  );

  return (
    <section id="works" className="px-8 md:px-24 py-16 md:py-40 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-baseline justify-between mb-10 md:mb-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-neutral-400" />
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
              Selected Works
            </p>
          </div>
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
            {works.length} Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-24">
          {works.map((work) => (
            <WorkCard key={work.vimeoId + work.title} {...work} />
          ))}
        </div>

      </div>
    </section>
  );
}
