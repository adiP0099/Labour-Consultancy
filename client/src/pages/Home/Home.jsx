import { Link } from 'react-router-dom';
import '../../css/app.css';

const Home = () => {
  return (
    <div className="page-shell">
      <header className="hero-card">
        <nav className="nav-bar">
          <div className="brand">Labour Consultancy</div>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Modern hiring, simplified for every stakeholder.</h1>
          <p>Workers, employers, consultancies and admins collaborate in one secure platform.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/signup">Get Started</Link>
            <Link className="btn btn-secondary" to="/dashboard">View Dashboard</Link>
          </div>
        </div>
      </header>

      <section className="grid-section">
        <div className="info-card">
          <h3>For Workers</h3>
          <p>Create a polished profile, upload documents, and apply for roles.</p>
        </div>
        <div className="info-card">
          <h3>For Employers</h3>
          <p>Post jobs, review applicants and manage hiring pipelines.</p>
        </div>
        <div className="info-card">
          <h3>For Consultancies</h3>
          <p>Coordinate workers and employers with oversight and reporting.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
