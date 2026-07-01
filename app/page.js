import Link from "next/link";

const sites = new Array(13).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Site ${i + 1}`,
  description: "View interior design website concept",
}));

export default function Page() {
  return (
    <main className="min-h-screen bg-[#181818] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#d7ff00]">
            Website Demos
          </p>

          <h1 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-6xl">
            Choose Your Interior <br className="hidden sm:block" />
            Website Design
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">
            Explore different homepage layouts and design styles created for
            interior designers, architects and decor studios.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <Link
              key={site.id}
              href={`/web${site.id}`}
              className="group border border-white/10 bg-[#202020] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#d7ff00] hover:bg-[#242424]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[#d7ff00]">
                    Demo {site.id.toString().padStart(2, "0")}
                  </span>

                  <h2 className="mt-5 font-serif text-3xl font-black">
                    {site.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {site.description}
                  </p>
                </div>

                <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/10 text-lg font-black text-[#d7ff00] transition group-hover:border-[#d7ff00] group-hover:bg-[#d7ff00] group-hover:text-black">
                  →
                </span>
              </div>

              <div className="mt-8 h-[2px] w-full bg-white/10">
                <div className="h-full w-0 bg-[#d7ff00] transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}