import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Shinobi.png";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center h-[10vh] w-[100vw] sticky z-50 top-0">
      <img src={Logo} alt=""className="h-[100%] w-[10vw]" />
      <nav>
        <ul className="flex gap-4">
          <li><NavLink  to="/" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 hover:underline ${isActive ? "text-red-500" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 hover:underline ${isActive ? "text-red-500" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>About</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 hover:underline  ${isActive ? "text-red-500" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
