import { Code2, Shield, Zap, Sparkles } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: <Zap className="h-5 w-5" />, 
      title: 'Blazing fast',
      desc: 'Optimized for speed with Vite, React, and intelligent code splitting.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Production-ready',
      desc: 'Accessible, responsive, and polished with Tailwind and Radix.',
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: 'Developer-first',
      desc: 'Clean architecture, modern tooling, and batteries-included patterns.',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Futuristic 3D',
      desc: 'Interactive Spline components for a premium, tech-forward feel.',
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <div className="text-cyan-300/90 mb-4">{item.icon}</div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-slate-300/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
