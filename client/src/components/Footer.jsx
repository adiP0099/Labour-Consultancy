import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Labour<span className="text-blue-500">Connect</span>
          </h2>

          <p className="leading-7">
            Connecting workers, employers and consultancies through one
            secure and trusted recruitment platform.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-slate-800 hover:bg-pink-500 p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-slate-800 hover:bg-blue-500 p-3 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-slate-800 hover:bg-sky-500 p-3 rounded-full transition"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-400">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Our Services
          </h3>

          <ul className="space-y-3">

            <li>Worker Registration</li>

            <li>Employer Hiring</li>

            <li>Consultancy Management</li>

            <li>Resume Management</li>

            <li>Job Search</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <p>support@labourconnect.com</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LabourConnect. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link to="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-blue-400">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;