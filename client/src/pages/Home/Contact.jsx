import { Link } from 'react-router-dom';
import '../../css/app.css';

const Contact = () => (
  <div className="page-shell">
    <div className="hero-card">
      <h2>Contact</h2>
      <p>Email: support@labourconsultancy.com</p>
      <p>Phone: +1 (555) 010-2024</p>
      <Link className="btn btn-primary" to="/">Back Home</Link>
    </div>
  </div>
);

export default Contact;
