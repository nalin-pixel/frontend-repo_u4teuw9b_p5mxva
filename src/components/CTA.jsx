function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 overflow-hidden">
          <div className="absolute right-0 top-0 -mr-24 -mt-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-2xl" />
          <div className="relative grid md:grid-cols-2 items-center gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Ready to build your SaaS?</h2>
              <p className="text-slate-300/90 mt-3">Start with a clean, minimal foundation and elevate it with advanced 3D interactions.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex justify-center items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all rounded-xl px-6 py-3 shadow-[0_8px_30px_rgb(32,132,252,0.35)] hover:shadow-[0_8px_30px_rgb(32,132,252,0.55)]">
                Create your account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
