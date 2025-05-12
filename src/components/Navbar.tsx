// src/components/Navbar.tsx
import { useState, useEffect } from "react";

const Navbar = () => {
  // State to track if the navbar is scrolled
  const [scrolled, setScrolled] = useState(false);
  
  // Effect to handle scroll event. 
  // as soon as the component mounts, this is called
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    // and it will add an event listener to the window object
    document.addEventListener("scroll", handleScroll);
    return () => {
      // cleanup function to remove the event listener when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    // navbar component. uses scrolled state to change styles
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Container for the navbar content */}
      {/* uses flexbox to center the content and space it out */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* uses scrolled state to change styles */}
        <h1
          className={`font-bold transition-all duration-300 ${
            scrolled ? "text-xl text-gray-900" : "text-2xl text-white"
          }`}
        >
          Sami
        </h1>
        <div className="hidden md:flex space-x-8">
          {/* Map through the navigation items and create links */}
          {/* uses scrolled state to change styles */}
          {["About", "Experience", "Projects", "Resume"].map((item) => (
            <a
              key={item} // unique key for each item
              href={`#${item.toLowerCase()}`} // link to the section
              className={`font-medium transition-all duration-300 hover:text-blue-600 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button*/}
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
