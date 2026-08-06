import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/Home/About';
import Services from './pages/Home/Services';
import Contact from './pages/Home/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound';
import Map from './pages/Map/Map';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
