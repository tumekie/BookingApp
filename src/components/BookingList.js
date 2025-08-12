import React, { useEffect, useState } from 'react';
import api from '../api/api';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get('/bookings/user/1')
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>
            {b.date} at {b.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;