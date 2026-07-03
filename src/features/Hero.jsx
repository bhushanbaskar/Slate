function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-88px)] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-white/20 px-4 py-2">
          <span className="text-sm">✨ Personal Finance, Simplified</span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Financial clarity,
          <br />
          without the spreadsheets.
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Track spending, understand habits, and make confident financial
          decisions through beautiful insights and effortless organization.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="rounded-xl bg-lime-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-lime-300">
            Get Started
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            Learn More
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20">{/* Image / Mockup will go here later */}</div>
      </div>
    </section>
  );
}

export default Hero;
