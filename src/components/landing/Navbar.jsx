// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;