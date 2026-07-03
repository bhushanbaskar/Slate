import Navbar from "./Navbar";
import Hero from "./Hero";

function Header() {
  return (
    <header
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#081d16]
        text-white
      "
    >
      {/* Grid Pattern */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:32px_32px] md:bg-[size:48px_48px]
        "
      />

      {/* Main Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-400/20
          blur-[140px]
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-32
          bottom-0
          
          rounded-full
          bg-lime-400/10
          blur-[120px]

          h-[350px] w-[350px]
md:h-[700px] md:w-[700px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-32
          top-20
          h-[200px] w-[200px]
md:h-[400px] md:w-[400px]
          rounded-full
          bg-lime-400/15
          blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}

export default Header;
