import React, { useState, useEffect } from 'react';
import api from '../api/api';

function BookingForm() {
  const [bookedTimes, setBookedTimes] = useState([]);
  const [emailError, setEmailError] = useState('');

  const [form, setForm] = useState({
    date: '',
    time: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    if (form.date) {
      api.get(`/bookings/times?date=${form.date}`)
        .then((res) => setBookedTimes(res.data))
        .catch((err) => console.error(err));
    } else {
      setBookedTimes([]);
    }
  }, [form.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      if (value === '') {
        setEmailError('');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
  }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/bookings', form);
      alert('Booking created!');
      setForm({
        date: '',
        time: '',
        name: '',
        email: ''
      });
      setBookedTimes([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
      <select name="time" value={form.time} onChange={handleChange} required>
        <option value="">Select a time</option>
        {Array.from({ length: 9 }, (_, i) => {
          const hour = i + 9; // 9 to 17
          const hour12 = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
          const period = hour < 12 ? 'AM' : 'PM';
          const timeLabel = `${hour12}:00 ${period}`;
          const isDisabled = bookedTimes.includes(timeLabel);
          return (
            <option key={timeLabel} value={timeLabel} disabled={isDisabled}>
              {timeLabel} {isDisabled ? '(Booked)' : ''}
            </option>
          );
        })}
      </select>
      <input type="text" name="name" value={form.name} placeholder="Fullname" onChange={handleChange} required />
      <input type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} required />
      {emailError && <div style={{ color: 'red', fontSize: '0.9em' }}>{emailError}</div>}
      <button type="submit" disabled={emailError}>Book</button>
    </form>
  );
}

export default BookingForm;