"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // For Next.js; use plain <a> for React

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll function
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - 80, // Adjust for navbar height
      });
    }
    setMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-[20px] py-3" : "bg-black/60 backdrop-blur-[10px] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="text-[clamp(1.5rem,4vw,2rem)] font-black leading-none bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
          >
            Aptcode.
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, `#${item.toLowerCase()}`)}
                  className="text-white/90 hover:text-white font-medium transition-all hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] px-3 py-2 rounded-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-black/70 backdrop-blur-[20px] border-l border-white/10 shadow-lg z-[1001] transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button Inside Mobile Menu */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items (Larger Text) */}
            <div className="flex flex-col space-y-4 p-6 mt-4">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, `#${item.toLowerCase()}`)}
                  className="text-white/90 hover:text-white font-medium text-lg transition-all hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] px-4 py-3 rounded-lg"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
