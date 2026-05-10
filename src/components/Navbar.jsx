import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-40
      bg-[rgba(10,10,10,0.8)] backdrop-blur-lg
      border-b border-white/10 shadow-lg"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-lg sm:text-2xl font-bold text-white tracking-wide"
          >
            Seema<span className="text-blue-500">.Divan</span>
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center
            text-white text-3xl cursor-pointer
            transition-transform duration-300 hover:scale-110"
            aria-label="Open Menu"
          >
            &#9776;
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">

            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </nav>
  );
};