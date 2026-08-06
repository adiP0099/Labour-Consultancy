import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../css/Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

const [location, setLocation] = useState({
  latitude: user?.location?.latitude || "",
  longitude: user?.location?.longitude || "",
});

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    () => {
      alert("Unable to fetch your location.");
    }
  );
};

const updateLocation = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(
      "http://localhost:5000/api/users/location",
      {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);
  } catch (error) {
    console.error(error);
    alert("Failed to update location.");
  }
};

  return (
    <div className="dashboard">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="logo">
          <h2>LabourConnect</h2>
        </div>

        <ul>
          <li><a href="#">🏠 Dashboard</a></li>
          <li><a href="#">👤 My Profile</a></li>
          <li><a href="#">📄 My Documents</a></li>
          <li><a href="#">💼 Jobs</a></li>
          <li><a href="#">⚙ Settings</a></li>
        </ul>

      </aside>

      {/* Main Content */}

      <div className="main">

        {/* Header */}

        <header className="header">

          <div>
            <h2>Dashboard</h2>
          </div>

          <div className="user">

            <div className="avatar">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <h4>{user?.name || "User"}</h4>
              <small>{user?.role || "Worker"}</small>
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </header>

        {/* Welcome */}

        <section className="welcome">

          <h1>Welcome, {user?.name || "User"} 👋</h1>

          <p>
            You have successfully logged into your Labour Consultancy Portal.
          </p>

        </section>

        {/* Cards */}

        <section className="cards">

          <div className="card">
            <h3>Name</h3>
            <h2>{user?.name || "-"}</h2>
          </div>

          <div className="card">
            <h3>Email</h3>
            <h2>{user?.email || "-"}</h2>
          </div>

          <div className="card">
            <h3>Role</h3>
            <h2>{user?.role || "-"}</h2>
          </div>

          <div className="card">
            <h3>Phone</h3>
            <h2>{user?.phone || "-"}</h2>
          </div>

        </section>

        {/* Status */}

        <section className="cards">

          <div className="card">

            <h3>Authentication</h3>

            <p>✅ Login Successful</p>
            <p>✅ JWT Token Verified</p>
            <p>✅ MongoDB Connected</p>
            <p>✅ User Logged In</p>

          </div>

          <div className="card">

            <h3>Next Features</h3>

            <ul>
              <li>✔ Profile Management</li>
              <li>✔ Upload Documents</li>
              <li>✔ Apply for Jobs</li>
              <li>✔ View Applications</li>
            </ul>

          </div>

          <div className="card">
            <h3>📍 Current Location</h3>

            <p><strong>Latitude:</strong>{" "}
               {location.latitude || "Not Selected"}
            </p>

            <p>
              <strong>Longitude:</strong>{" "}
              {location.longitude || "Not Selected"}
            </p>

            <button className="location-btn" onClick={getCurrentLocation}>
               Get Current Location
            </button>

            <button className="location-btn" onClick={updateLocation}>
               Update Location
            </button>
          </div>

        </section>

      </div>

    </div>
  );
};

export default Dashboard;