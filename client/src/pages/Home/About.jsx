import { Link } from 'react-router-dom';
import '../../css/app.css';

const About = () => (
  <div className="page-shell">
    <div className="hero-card">
      <h2>About Labour Consultancy</h2>
      <p>This portal connects job seekers, employers and consultancy teams through secure job matching and profile management.</p>
      <Link className="btn btn-primary" to="/">Back Home</Link>
    </div>
  </div>
);

export default About;
