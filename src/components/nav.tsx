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
    if (previous !== undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
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
      className="sticky top-0 min-h-20 flex flex-row justify-between items-center px-12 bg-gradient-to-b from-emerald-50/70 to-transparent z-50 animate-dropdown"
    >
      {/* Left Side */}
      <h1 className="text-2xl sm:text-4xl text-emerald-600 font-bold">
        <span className="glowing-text">
          {"Portfolio".split("").map((letter, index) => (
            <span
              key={index}
              style={{ "--i": index } as React.CSSProperties} // Cast to React.CSSProperties
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>

      {/* Right Side (Desktop View) */}
      <div className="hidden md:flex flex-row gap-x-8">
        <a
          href="/resume.pdf"
          download="Supatkon_Resume.pdf"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          Resume/CV
        </a>
        <a
          href="/Transcript.pdf"
          download="Supatkon_Transcipt.pdf"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          Transcript
        </a>
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
          href="#TA"
          className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125"
        >
          Teaching Assistant
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
        <div className="md:hidden absolute top-16 right-0 bg-emerald-400 w-full max-h-80 flex flex-col items-center py-4 rounded-lg shadow-lg overflow-y-auto z-40">
          <a
            href="/resume.pdf"
            download="Supatkon_Resume.pdf"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
            onClick={toggleMenu}
          >
            Resume/CV
          </a>
          <a
            href="/Transcript.pdf"
            download="Supatkon_Transcipt.pdf"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
          >
            Transcript
          </a>
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
            onClick={toggleMenu}
            href="#TA"
            className="text-xl text-emerald-900/80 font-bold hover:text-emerald-900 transform transition-transform duration-300 hover:scale-125 mb-4"
          >
            Teaching Assistant
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
