import './App.css';
import DisplayProducts from './components/DisplayProducts';
import Cart from './pages/cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DisplayProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
