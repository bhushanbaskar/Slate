function Navbar() {
  const links = ["Home", "Features", "Integrations", "Pricing", "Contact"];

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Slate
        </h1>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((navlink, index) => (
          <a
            key={index}
            href={`#${navlink.toLowerCase()}`}
            className="text-sm text-white/70 transition hover:text-white"
          >
            {navlink}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-6">
        <a
          href="#login"
          className="text-sm hidden md:inline-block text-white/80 hover:text-white transition"
        >
          Login
        </a>

        <button className="rounded-xl bg-lime-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-lime-300 cursor-pointer">
          Get Started +
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
