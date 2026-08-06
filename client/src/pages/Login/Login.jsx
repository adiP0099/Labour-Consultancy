import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import "../../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      {/* Left Side */}

      <div className="login-left">

        <h1>LabourConnect</h1>

        <h2>Welcome Back 👋</h2>

        <p>
          Login to continue and access your Labour Consultancy Dashboard.
        </p>

      </div>

      {/* Right Side */}

      <div className="login-right">

        <div className="login-box">

          <h2>Login</h2>

          <p>Sign in to continue</p>

          {error && (
            <div className="error-box">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <FaEnvelope />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-box">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            <button
              className="login-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="signup-link">
            Don't have an account?

            <Link to="/signup"> Register</Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;