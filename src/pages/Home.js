import React from 'react';
import BoookingSignIn from '../components/BookingSignIn';

function Home() {
  return (
    <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
      <h1>Welcome to Tumekie's Booking App</h1>
      <div style={{ maxWidth: 600, textAlign: 'center', marginBottom: 20 }}>
        <p>This application allows you to book time slots for various services. You can view available time slots, make bookings, and manage your appointments.</p>
        <p>To get started, please sign in or create an account.</p>
      </div>
      <div style={{ marginTop: -200}}>
        <BoookingSignIn/>
      </div>
    </div>
  )
}

export default Home;