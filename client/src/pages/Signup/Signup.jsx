import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../css/app.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', role: 'worker' });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(form);
    navigate('/dashboard');
  };

  return (
    <div className="page-shell">
      <div className="form-card">
        <h2>Create Account</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="worker">Worker</option>
            <option value="employer">Employer</option>
            <option value="consultancy">Consultancy</option>
            <option value="admin">Admin</option>
          </select>
          <button className="btn btn-primary" type="submit">Signup</button>
        </form>
        <p>Already registered? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
