import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

function Bookings() {
  return (
    <div>
      <h1>Book a Slot</h1>
      <BookingForm />
      {/* <BookingList /> */}
    </div>
  );
}

export default Bookings;