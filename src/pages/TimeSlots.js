import React, { useState } from 'react';
import api from '../api/api';

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
    <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Available Time Slots</h1>
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