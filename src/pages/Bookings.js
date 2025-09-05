import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import background from '../assets/b6.jpg';

function Bookings() {
  return (
    <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1 style={{ maxWidth: 600, textAlign: 'center', marginBottom: 20 }}>Book a Slot</h1>
      <BookingForm />
      {/* <BookingList /> */}
    </div>
  );
}

export default Bookings;