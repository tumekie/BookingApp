import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import TimeSlots from './pages/TimeSlots';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: 'skyblue', display: 'flex', justifyContent: 'center', gap: '15px', color: 'white', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link> |
        <Link to="/bookings" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Bookings</Link> |
        <Link to="/slots" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Time Slots</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/slots" element={<TimeSlots />} />
      </Routes>
    </Router>
  );
}

export default App;