import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-semibold text-black">Tech Seeds</span>
          </div>

          {/* Navigation Links beside logo */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-800">
            <Link to="/ourlearning" className="cursor-pointer hover:text-green-600 transition">Learning Tracks</Link>
            <Link to="/instructors" className="cursor-pointer hover:text-green-600 transition">Our Instructors</Link>
          </ul>
        </div>

        {/* Right Section: Contact Us */}
        <div className="hidden md:block text-sm font-semibold text-gray-800 cursor-pointer hover:text-green-600 transition">
          Contact Us
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Dropdown Menu */}
{isOpen && (
  <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-inner">
    <Link
      to="/ourlearning"
      onClick={() => setIsOpen(false)}
      className="block py-2 text-gray-800 font-medium hover:text-green-600 transition"
    >
      Learning Tracks
    </Link>
    <Link
      to="/instructors"
      onClick={() => setIsOpen(false)}
      className="block py-2 text-gray-800 font-medium hover:text-green-600 transition"
    >
      Our Instructors
    </Link>
    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className="block text-gray-800 font-medium hover:text-green-600 transition"
    >
      Contact Us
    </Link>
  </div>
)}
    </header>
  );
}
