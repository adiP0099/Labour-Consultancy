import { useAuth } from '../../context/AuthContext';
import '../../css/app.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="page-shell">
      <div className="hero-card">
        <h2>Dashboard</h2>
        <p>Welcome, {user?.name || 'User'}!</p>
        <p>Role: {user?.role || 'guest'}</p>
        <button className="btn btn-secondary" onClick={logout}>Logout</button>
      </div>
      <div className="grid-section">
        <div className="info-card">
          <h3>Worker Module</h3>
          <p>Profile creation, resumés, job applications and skill updates.</p>
        </div>
        <div className="info-card">
          <h3>Employer Module</h3>
          <p>Company profiles, job posting, applicants and approvals.</p>
        </div>
        <div className="info-card">
          <h3>Consultancy & Admin</h3>
          <p>Oversight, searches and control dashboards.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
