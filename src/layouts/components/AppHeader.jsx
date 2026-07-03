import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import lightModeIcon from "../../assets/light-mode-icon.svg";
import userPpf from "../../assets/user.webp";
import { Link } from "react-router-dom";
function AppHeader() {
  return (
    <header className="flex px-4 py-2 items-center justify-between h-[10vh]">
      {/* =============================================logo======================================================================= */}

      <Link
        className="flex  w-max px-4 py-2 items-center justify-between"
        to="/"
      >
        <img
          src={logo}
          alt="slate-logo"
          className="select-none w-7.5"
          draggable="false"
        />
        <h1>Slate</h1>
      </Link>

      {/* =====================================================Search================================================= */}
      <div className=" hidden md:flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-4xl hover:border-zinc-700 focus-within:border-zinc-600 transition-colors">
        <img
          src={searchIcon}
          alt=""
          className="w-4 h-4 opacity-50 select-none"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-sm text-zinc-100 placeholder:text-zinc-500"
        />
      </div>

      {/* =====================================================Theme & User Avatar================================================= */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors">
          <img
            src={lightModeIcon}
            alt="theme-toggle"
            className="w-4 h-4 opacity-70"
          />
        </button>

        {/* Avatar */}
        <button className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors [all:unset]">
          <img
            src={userPpf}
            className="w-9 h-9 rounded-full object-center object-cover"
          />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
