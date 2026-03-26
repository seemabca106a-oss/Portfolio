import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center
      transition-all duration-300 transform
      ${menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}`}
    >

      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:text-blue-400 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      <a
        href="#home"
        className="text-2xl text-white my-4 hover:text-blue-400 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="#about"
        className="text-2xl text-white my-4 hover:text-blue-400 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>

      <a
        href="#projects"
        className="text-2xl text-white my-4 hover:text-blue-400 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>

      <a
        href="#contact"
        className="text-2xl text-white my-4 hover:text-blue-400 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

    </div>
  );
};