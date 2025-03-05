import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 text-white text-center p-4">
      <p className="text-lg font-bold">&copy; {new Date().getFullYear()} Shinobi-TV. </p>
      <p className="text-lg font-bold">All rights reserved… unless you have snacks to share!</p>
      <p className="text-md text-gray-300">Developed by <span className="font-semibold text-red-400">Ambrish Yadav</span></p>
      <p className="flex justify-center items-center gap-2 mt-2">
        <a 
          href="https://github.com/Ambrishyadav-byte/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-1 text-red-300 hover:text-red-500 transition"
        >
          <FaGithub size={20} /> GitHub
        </a>
      </p>
      <p className="text-sm mt-2 text-gray-300">
        This website is for practice and educational purposes only. All the content available on this website is taken from other sources and does not belong to me.
      </p>
    </footer>
  );
};

export default Footer;