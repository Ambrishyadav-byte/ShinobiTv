import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaGithub, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Shinobi.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-[#232525] text-white p-4 flex items-center justify-between h-[10vh] w-full sticky z-50 top-0">
      {/* Mobile Menu Button (Left-Aligned) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-3xl md:hidden"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Logo (Centered in Mobile, Left in Desktop) */}
      <div className=" md:static md:transform-none">
        <img src={Logo} alt="Logo" className="h-[7vh] w-auto" />
      </div>

      {/* Navigation Links (Mobile: Hidden | Desktop: Visible) */}
      <nav
        className={`absolute top-[10vh] left-0 w-full bg-[#232525] md:static md:flex md:w-auto transition-transform duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:gap-6 text-xl items-center md:text-2xl">
          <li className="w-full text-center md:w-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 p-4 md:p-0 duration-200 hover:underline ${
                  isActive ? "text-red-500" : "text-white"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="w-full text-center md:w-auto">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-2 p-4 md:p-0 duration-200 hover:underline ${
                  isActive ? "text-red-500" : "text-white"
                }`
              }
            >
              <FaInfoCircle /> About
            </NavLink>
          </li>
          <li className="w-full text-center md:w-auto">
            <a
              href="https://github.com/Ambrishyadav-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 md:p-0 text-white duration-200 hover:underline hover:text-orange-700"
            >
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Search Button */}
      <div className="relative">
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600 transition-all flex items-center gap-2 text-sm md:text-base"
        >
          <FaSearch /> Search
        </button>

        {/* Search Form (Dropdown) */}
        {searchOpen && (
          <div className="absolute right-0 top-12 bg-white p-4 rounded-lg shadow-lg w-[80vw] md:w-[30vw]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">Search for an Anime(Coming soon!)</h2>
              <button onClick={() => setSearchOpen(false)} className="text-red-600 text-xl">
                <FaTimes />
              </button>
            </div>
            <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
              <input
                type="text"
                className="w-full p-3 outline-none text-lg text-gray-700"
                placeholder="eg: JoJo's Bizarre Adventure"
              />
              <button className="bg-red-500 text-white px-4 py-3">
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
