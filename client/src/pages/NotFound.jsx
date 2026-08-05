import { Link } from 'react-router-dom';
import '../css/app.css';

const NotFound = () => (
  <div className="page-shell">
    <div className="hero-card">
      <h2>404 - Page not found</h2>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
