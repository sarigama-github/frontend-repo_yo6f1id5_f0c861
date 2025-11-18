import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import Trends from './components/Trends';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Ambient radial aura background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),rgba(59,130,246,0.14)_35%,rgba(251,146,60,0.08)_60%,transparent_70%)] blur-2xl" />
      </div>

      <Navbar />
      <Hero />
      <main>
        <NewsFeed />
        <Trends />

        {/* Subscribe */}
        <section id="subscribe" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-white/[0.04] to-white/[0.02] p-8 md:p-10 backdrop-blur">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Get the AI music briefing</h3>
                  <p className="text-white/70 mt-1">Daily digest of the most important updates in your inbox.</p>
                </div>
                <form className="w-full md:w-auto flex gap-3">
                  <input
                    type="email"
                    placeholder="you@studio.com"
                    className="w-full md:w-80 px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <button type="submit" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium shadow-lg shadow-purple-500/20">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} AI Music Daily</footer>
      </main>
    </div>
  );
}

export default App;
