import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import axios from "axios";
import "../../css/signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.password) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/auth/register", form);

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">

      {/* Left Side */}

      <div className="signup-left">

        <h1>LabourConnect</h1>

        <h2>Create Your Account</h2>

        <p>
          Join India's modern Labour Consultancy Platform and connect with
          employers, consultancies and opportunities.
        </p>

      </div>

      {/* Right Side */}

      <div className="signup-right">

        <div className="signup-box">

          <h2>Create Account</h2>

          <p>Register to continue</p>

          {error && (
            <div className="error-box">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaPhone />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

          <select
              className="role-select"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
            <option value="" disabled>
               Select Role
            </option>

            <option value="worker">👷 Worker</option>
            <option value="employer">🏢 Employer</option>
            <option value="consultancy">🤝 Consultancy</option>
            <option value="admin">👨‍💼 Admin</option>
          </select>

            <button
              className="signup-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <p className="login-link">
            Already have an account?

            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;