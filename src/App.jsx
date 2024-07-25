import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Products from "./pages/products";
import Location from "./pages/location";
import Contact from "./pages/contact";
import Navbar from './component/layout/navbar';
import Testimonials from './pages/testimonials';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/testimonials" element={<Testimonials/>} />
      </Routes>
    </Router>
  );
}

export default App;
