import React, { useState } from 'react';
import api from '../api/api';
import background from '../assets/b6.jpg';

function TimeSlots() {
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState([]);

  const fetchSlots = async () => {
    try {
      const res = await api.get(`/timeslots/available?date=${date}`);
      setSlots(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1 style={{ maxWidth: 600, textAlign: 'center', marginBottom: 20 }}>Available Time Slots</h1>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={fetchSlots}>Check</button>
      <ul>
        {slots.map(slot => (
          <li key={slot.id}>{slot.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimeSlots;