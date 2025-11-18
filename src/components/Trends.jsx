import { LineChart, Rocket, Waveform } from 'lucide-react';

const stats = [
  { label: 'AI tracks uploaded (24h)', value: '48,214', icon: Waveform },
  { label: 'New tools launched (7d)', value: '12', icon: Rocket },
  { label: 'Research papers (30d)', value: '37', icon: LineChart },
];

export default function Trends() {
  return (
    <section id="trends" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Signals & trends</h2>
          <p className="text-white/70 mt-2 max-w-2xl">A snapshot of whats moving the AI music ecosystem right now.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/0 via-blue-500/0 to-orange-400/0 group-hover:via-blue-500/5 transition-colors" />
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">{s.value}</div>
                  <div className="text-sm text-white/60">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
