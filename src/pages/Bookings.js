import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import background from '../assets/b6.jpg';

function Bookings() {
  return (
    <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      {/* <h1 style={{ maxWidth: 600, textAlign: 'center' }}>Book a Slot</h1> */}
      <div>
        <p style={{ maxWidth: 600, textAlign: 'center' }}>Use the form below to book a time slot for our services. Please select a date and time that works best for you. Once you've submitted your booking, you'll receive a confirmation email with the details of your appointment.</p>
        <p style={{ maxWidth: 600, textAlign: 'center' }}>If you need to view or manage your existing bookings, please log in to your account.</p>
        <BookingForm />
      </div>
      {/* <BookingList /> */}
    </div>
  );
}

export default Bookings;