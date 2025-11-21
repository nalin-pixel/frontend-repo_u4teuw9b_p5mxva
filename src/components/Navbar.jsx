import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-[0_0_30px_rgba(56,189,248,.45)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight">Lamdong</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(32,132,252,0.35)] hover:shadow-[0_8px_30px_rgb(32,132,252,0.55)] transition-all">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="block text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-xl">
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
