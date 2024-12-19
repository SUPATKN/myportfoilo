import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import { useState } from "react";

export const Nav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: easeInOut }}
      className="sticky top-0 min-h-20 flex flex-row justify-between items-center px-12 bg-gradient-to-b from-emerald-200/90 to-transparent z-50 animate-dropdown"
    >
      {/* Left Side */}
      <h1
        className="text-xl sm:text-4xl text-emerald-900/80 font-bold"
      >
        Portfolio
      </h1>

      {/* Right Side (Desktop View) */}
      <div className="hidden md:flex flex-row gap-x-8">
        <a
          href="#about"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          About Me
        </a>
        <a
          href="#tech"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          Tech Skills
        </a>
        <a
          href="#projects"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          Contact
        </a>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-emerald-900/80 text-3xl font-bold "
      >
        &#9776;
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 bg-white w-full h-screen flex flex-col items-center py-8 md:hidden">
          <a
            href="#about"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
            onClick={toggleMenu}
          >
            About Me
          </a>
          <a
            href="#tech"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
            onClick={toggleMenu}
          >
            Tech Skills
          </a>
          <a
            href="#projects"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
};
