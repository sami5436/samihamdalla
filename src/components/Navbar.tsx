// src/components/Navbar.tsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1
          className={`font-bold transition-all duration-300 ${
            scrolled ? "text-xl text-gray-900" : "text-2xl text-white"
          }`}
        >
          Sami
        </h1>
        <div className="hidden md:flex space-x-8">
          {["About", "Experience", "Projects", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-all duration-300 hover:text-blue-600 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button - you would implement the toggle functionality */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
        >
          <div className="space-y-1">
            <div
              className={`w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}
            ></div>
            <div
              className={`w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}
            ></div>
            <div
              className={`w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"}`}
            ></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
