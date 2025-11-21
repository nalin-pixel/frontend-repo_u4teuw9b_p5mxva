import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_90%_90%,rgba(59,130,246,0.1),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <p className="text-slate-400 text-sm">© 2025 Lamdong. All rights reserved.</p>
          <a href="/test" className="text-slate-400 hover:text-white text-sm">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
