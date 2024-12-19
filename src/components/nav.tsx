import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import { useEffect, useState } from "react";
export const Nav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (lastest) => {
    const previous = scrollY.getPrevious();
    if (lastest > previous && lastest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: easeInOut }}
      className="sticky top-0 min-h-20 flex flex-row justify-between items-center px-12 bg-gradient-to-b from-emerald-200/90 to-transparent z-50 animate-dropdown"
    >
      {/* ฝั่งซ้าย */}
      <h1 className="text-4xl text-emerald-900/80 font-bold">Portfolio</h1>

      {/* ฝั่งขวา */}
      <div className="flex flex-row gap-x-8">
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
    </motion.nav>
  );
};
