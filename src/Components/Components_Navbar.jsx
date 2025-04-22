import { useState } from "react";
import "./Global.css";
import Logo from "./assets/webgen.png";
import { useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toogleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex fixed top-0 right-0 left-0 justify-center py-3 border-b-1 bg-[#0e0e0e]/70 backdrop-blur-md  ${
        isScrolled ? " py-3 " : "bg-transparent py-3"
      }`}
    > 
      <div className="container w-[1400px]">
        <nav className="text-white flex items-center justify-between text-md">
          <div className="logo items-center">
            <a href="/" className="flex gap-1 items-center">
              <img src={Logo} alt="logo" width="40px" />
              <h1 className="text-md font-bold">Webgen</h1>
            </a>
          </div>
          <div
            className={`link-menu font-semibold z-90 transition-all duration-300 ease-in-out
    ${
      menuOpen
        ? "fixed top-[4rem] left-0 right-0 w-full h-[calc(100vh-4.5rem)] flex flex-col items-center justify-start pt-20 gap-4 text-xl bg-[#0e0e0e]"
        : "hidden md:flex flex-row gap-3 ml-auto"
    }`}
          >
            <a href="/getting-started">Guide</a>
            <a href="#frame">Framework</a>
            <a href="#about">About</a>
          </div>

          <div
            className={`w-px h-5 mr-6 ml-6 bg-gray-600 line ${
              menuOpen ? "hidden" : "hidden md:flex"
            }`}
          />
          <div
            className={`icon-menu font-semibold z-50 transition-all duration-300 ease-in-out text-xl
    ${
      menuOpen
        ? "fixed top-[4rem] left-0 right-0 w-full h-[calc(100vh-4.5rem)] flex flex-row items-start pt-60 justify-center gap-4 text-2xl pb-10 bg-transparent"
        : "hidden md:flex flex-row gap-4 items-center"
    }`}
          >
            <a
              href="https://github.com/zen-Hikari/Project-Web-Generator"
              target="_blank"
            >
              <i className="ai-github-fill"></i>
            </a>
            <a href="https://www.instagram.com/hikarizenka._/" target="_blank">
              <i className="ai-instagram-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zen-hikari-703125316/"
              target="_blank"
            >
              <i className="ai-linkedin-box-fill"></i>
            </a>
          </div>

          <button
            className="hamburger space-y-2 px-4 py-2"
            onClick={toogleMenu}
          >
            <span
              className={`${
                menuOpen ? "rotate-45 translate-y-2" : ""
              } transition-all transform origin-center flex w-6 h-[2px] bg-white rounded-full`}
            ></span>
            <span
              className={`${
                menuOpen ? "opacity-0" : ""
              } transition-all transform origin-center flex w-6 h-[2px] bg-white rounded-full`}
            ></span>
            <span
              className={`${
                menuOpen ? "-rotate-45 -translate-y-3" : ""
              } transition-all transform origin-center flex w-6 h-[2px] bg-white rounded-full`}
            ></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
