import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../css/app.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(form.email, form.password);
    navigate('/dashboard');
  };

  return (
    <div className="page-shell">
      <div className="form-card">
        <h2>Welcome Back</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
        <p>New here? <Link to="/signup">Create account</Link></p>
      </div>
    </div>
  );
};

export default Login;
