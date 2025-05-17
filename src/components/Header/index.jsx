import React, { useState, useEffect } from "react";
import "./style.css";
import { useDarkMode } from "../../contexts/DarkModeContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  // State để theo dõi scroll
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Bắt sự kiện scroll để đổi màu navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-10  transition-colors duration-300 ${
          scrolled
            ? darkMode
              ? "bg-coffee shadow-lg " // Khi scroll + dark mode
              : "bg-custom-gradient shadow-lg " // Khi scroll + light mode
            : "bg-transparent"
        }`}
      >
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                {/* <img className="h-10 w-auto" src="/logo-11.png" alt="Logo" /> */}
                <span
                  className={`ml-2 text-2xl font-bold transition-colors duration-300 ${
                    scrolled ? "text-red-900 dark:text-white" : "text-white"
                  }`}
                >
                  Portfolio
                </span>
              </a>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex md:space-x-10">
              {["Trang chủ", "Về tôi", "Kỹ năng", "Dự án"].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Trang chủ"
                      ? "#home"
                      : item === "Về tôi"
                      ? "#about"
                      : item === "Kỹ năng"
                      ? "#skills"
                      : item === "Dự án"
                      ? "#projects"
                      : "#"
                  }
                  className={`btn41-43 btn-41 relative px-3 py-2 text-base font-bold transition-all ease-in-out ${
                    scrolled
                      ? "text-red-900 hover:text-gray-400 dark:text-white"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Liên hệ + Hamburger */}
            <div className="flex items-center space-x-3">
              {/* ...SVG icon remains the same */}
              {/*  */}

              <input
                type="checkbox"
                id="react-option"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="hidden peer"
              />

              <label
                htmlFor="react-option"
                className="flex z-10 peer w-14 h-10 shadow-lg duration-300  border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-lg cursor-pointer  peer-checked:shadow peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
              ></label>

              <svg
                className="absolute  stroke-black w-14 h-10 duration-300 peer-checked:opacity-100 opacity-0"
                height="100"
                viewBox="0 0 100 100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
              </svg>

              <svg
                className="absolute stroke-yellow-500 w-14 h-10 duration-300 peer-checked:opacity-0 opacity-100"
                height="100"
                viewBox="0 0 100 100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
              </svg>

              <label
                htmlFor="check-menu"
                className="flex flex-col gap-2 w-8 cursor-pointer md:hidden z-20"
              >
                <input
                  id="check-menu"
                  className="peer appearance-none hidden peer"
                  type="checkbox"
                  checked={menuOpen}
                  onChange={toggleMenu}
                />
                <div className="rounded-2xl h-1 w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
                <div className="rounded-2xl h-1 w-full bg-white duration-500 peer-checked:-rotate-45"></div>
                <div className="rounded-2xl h-1 w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden dark:bg-coffee px-4 pt-4 pb-3 space-y-1 bg-gray-800 bg-opacity-90">
            {["Trang chủ", "Về tôi", "Kỹ năng", "Dự án"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
