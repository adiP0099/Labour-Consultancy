import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 India's Smart Labour Consultancy Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Find Skilled Workers <br />
            <span className="text-blue-600">& Build Your Career</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Connect workers, employers, and consultancies through one
            secure platform. Find jobs faster, hire smarter, and manage
            recruitment efficiently.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-3 text-gray-700 font-medium">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <span>Verified Workers & Employers</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <span>Fast & Secure Hiring</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <span>Trusted Consultancy Network</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 font-semibold transition"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Team Meeting"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;