import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import TimeSlots from './pages/TimeSlots';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex', justifyContent: 'center' }}>
        <Link to="/">Home</Link> | <Link to="/bookings">Bookings</Link> | <Link to="/slots">Time Slots</Link>
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