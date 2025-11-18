import { Menu, Music2, Newspaper, Sparkles, Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-lg shadow-purple-500/20 grid place-items-center">
            <Music2 className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold text-lg tracking-tight">AI Music Daily</div>
            <div className="text-xs text-white/60">News • Trends • Tools</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2" href="#news">
            <Newspaper className="h-4 w-4" /> News
          </a>
          <a className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2" href="#trends">
            <Sparkles className="h-4 w-4" /> Trends
          </a>
          <a className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2" href="#tools">
            <Bell className="h-4 w-4" /> Alerts
          </a>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 transition-colors">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
        </nav>

        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
