function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-violet-200 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
          <span>New</span> <span>AI-assisted marketing platform</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Content & marketing, on autopilot
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Plan, create, and publish high-converting content in minutes. Generate ideas, schedule posts, and capture leads — all in one place.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a href="#lead" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">Start free</a>
          <a href="#features" className="px-6 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-black">See how it works</a>
        </div>
        <p className="mt-3 text-xs text-gray-500">No credit card required</p>
      </div>
    </section>
  )
}

export default Hero
