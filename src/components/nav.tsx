export const Nav = () => {
  return (
    <nav className="sticky top-0 min-h-20 flex flex-row justify-between items-center px-12 bg-gradient-to-b from-cyan-900/70 to-transparent z-50 animate-dropdown">
      {/* ฝั่งซ้าย */}
      <h1 className="text-4xl text-cyan-100 font-bold">Portfolio</h1>

      {/* ฝั่งขวา */}
      <div className="flex flex-row gap-x-8">
        <a
          href="#about"
          className="text-xl text-cyan-100 font-bold hover:text-cyan-300 transform transition-transform duration-300 hover:scale-125"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-xl text-cyan-100 font-bold hover:text-cyan-300 transform transition-transform duration-300 hover:scale-125"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-xl text-cyan-100 font-bold hover:text-cyan-300 transform transition-transform duration-300 hover:scale-125"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
