import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

function Bookings() {
  return (
    <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Book a Slot</h1>
      <BookingForm />
      {/* <BookingList /> */}
    </div>
  );
}

export default Bookings;