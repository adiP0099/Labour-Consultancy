import { Link } from 'react-router-dom';
import '../../css/app.css';

const Services = () => (
  <div className="page-shell">
    <div className="hero-card">
      <h2>Services</h2>
      <ul>
        <li>Worker profile creation and skill management</li>
        <li>Employer job posting and applicant review</li>
        <li>Consultancy oversight and reporting</li>
        <li>Admin analytics and user management</li>
      </ul>
      <Link className="btn btn-primary" to="/">Back Home</Link>
    </div>
  </div>
);

export default Services;
