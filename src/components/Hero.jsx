import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur border border-white/10 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live AI music intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(124,58,237,0.25)]">
              The pulse of AI-generated music
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              Daily news, product launches, research notes, and trend signals across voice models, composition tools, licensing, and creator workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#news" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium shadow-lg shadow-purple-500/20">
                Read today’s brief
              </a>
              <a href="#subscribe" className="px-5 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/15 border border-white/10 backdrop-blur">
                Subscribe alerts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
