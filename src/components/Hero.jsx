import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Live interactive 3D
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Lamdong — a clean SaaS with a futuristic, minimalist vibe
            </h1>
            <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
              Launch fast with a refined interface, premium motion, and an interactive 3D hero. Built for modern startups that value clarity and craft.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex justify-center items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all rounded-xl px-6 py-3 shadow-[0_8px_30px_rgb(32,132,252,0.35)] hover:shadow-[0_8px_30px_rgb(32,132,252,0.55)]">
                Get started
              </a>
              <a href="#demo" className="inline-flex justify-center items-center gap-2 text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-xl px-6 py-3">
                Live demo
              </a>
            </div>
          </div>
          <div className="relative h-[460px] md:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
