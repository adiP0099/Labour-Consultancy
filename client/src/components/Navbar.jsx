import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          Labour<span className="text-gray-800">Connect</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/jobs" className="hover:text-blue-600 transition">
            Jobs
          </Link>

          <Link to="/workers" className="hover:text-blue-600 transition">
            Workers
          </Link>

          <Link to="/employers" className="hover:text-blue-600 transition">
            Employers
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/Signup"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Signup
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-5 space-y-4">

            <Link to="/">Home</Link>

            <Link to="/jobs">Jobs</Link>

            <Link to="/workers">Workers</Link>

            <Link to="/employers">Employers</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link
              to="/login"
              className="border border-blue-600 rounded-lg px-4 py-2 text-center"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 text-center"
            >
              Signup
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;