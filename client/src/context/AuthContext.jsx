import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

// Backend Base URL
const API = "http://localhost:5000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===========================
  // Check Login on Page Refresh
  // ===========================
useEffect(() => {
  const token = localStorage.getItem("token");
  const savedUser = localStorage.getItem("user");

  if (token && savedUser) {
    setUser(JSON.parse(savedUser));
  }

  setLoading(false);
}, []);

  // ===========================
  // Login
  // ===========================
  const login = async (email, password) => {
  const response = await axios.post(`${API}/auth/login`, {
    email,
    password,
  });

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));

  setUser(response.data.user);

  return response.data;
};
  // ===========================
  // Register
  // ===========================
  const signup = async (payload) => {
    const response = await axios.post(
      `${API}/auth/register`,
      payload
    );

    return response.data;
  };


// ===========================
// Logout
// ===========================
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setUser(null);
};

// Context Value
const value = useMemo(
  () => ({
    user,
    loading,
    login,
    signup,
    logout,
  }),
  [user, loading]
);

return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);