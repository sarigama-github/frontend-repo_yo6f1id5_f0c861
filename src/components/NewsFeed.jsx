import { ArrowUpRight, Mic2, Headphones, Music, PlayCircle } from 'lucide-react';

const items = [
  {
    tag: 'BREAKING',
    title: 'Open-source singing voice model hits human parity on pitch tracking',
    source: 'ArXiv',
    icon: Mic2,
  },
  {
    tag: 'PRODUCT',
    title: 'SoundFlow introduces real-time stem separation for AI DJs',
    source: 'Product Hunt',
    icon: Headphones,
  },
  {
    tag: 'LEGAL',
    title: 'Major label coalition outlines new licensing framework for AI vocals',
    source: 'Billboard',
    icon: Music,
  },
  {
    tag: 'CREATORS',
    title: 'Top YouTubers share best practices for AI-enhanced mixing',
    source: 'YouTube',
    icon: PlayCircle,
  },
];

export default function NewsFeed() {
  return (
    <section id="news" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Today’s headlines</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1">
            View all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.05] transition-colors p-5 md:p-6 overflow-hidden"
            >
              <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-orange-400/10 blur-2xl" />

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold tracking-widest text-white/60 px-2 py-1 rounded bg-white/5 border border-white/10">
                  {item.tag}
                </span>
                <span className="text-xs text-white/50">{item.source}</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 grid place-items-center text-white shadow shadow-purple-500/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
