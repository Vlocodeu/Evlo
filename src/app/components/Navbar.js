"use client"; // ✅ Ensure it's a client component
import Link from "next/link";
import { useState } from "react";
import "../globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative  px-6 py-3">
      {/* Gradient Background & Floating Elements */}
      <div className="absolute inset-0 nav-gradient-background">
        <div className="gradient-sphere nav-sphere-1"></div>
        <div className="gradient-sphere nav-sphere-2"></div>
        <div className="gradient-sphere nav-sphere-3"></div>
        <div className="nav-glow"></div>
        <div className="nav-grid-overlay"></div>
        <div className="nav-noise-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-lg font-semibold">EvolveInfi</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`flex-grow flex justify-center hidden md:flex space-x-10`}
        >
          {["home", "services", "blogs", "contactus"].map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`} // Set home to "/"
              className="glowing-text"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white absolute w-full left-0 top-14 py-4">
          <div className="flex flex-col items-center space-y-4">
            {["home", "services", "blogs", "contactus"].map((item) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item}`}
                className="glowing-text "
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
