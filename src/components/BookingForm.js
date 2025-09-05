import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import api from '../api/api';
import background from '../assets/b5.jpg';

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
    <Card component="form" style={{ maxWidth: 500, margin: 'auto', marginTop: 50, padding: 20 , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <CardContent>
        <TextField
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          label="Date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          style={{ marginBottom: 20 }}
          inputProps={{
            min: new Date().toISOString().split("T")[0], // restrict past dates
          }}
        />
        <TextField
          select
          name="time"
          value={form.time}
          onChange={handleChange}
          label="Time"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
          style={{ marginBottom: 20 }}
          error={bookedTimes.includes(form.time)}
          helperText={
            bookedTimes.includes(form.time) ? "Time slot already booked" : ""
          }
        >
          {Array.from({ length: 9 }, (_, i) => {
            const hour = i + 9; // 9 to 17
            const hour12 = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
            const period = hour < 12 ? "AM" : "PM";
            const timeLabel = `${hour12}:00 ${period}`;
            const isDisabled = bookedTimes.includes(timeLabel);

            return (
              <MenuItem key={timeLabel} value={timeLabel} disabled={isDisabled}>
                {timeLabel} {isDisabled ? "(Booked)" : ""}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          name="name"
          value={form.name}
          onChange={handleChange}
          label="Name"
          fullWidth
          required
          style={{ marginBottom: 20 }}
        />
        <TextField
          name="email"
          value={form.email}
          onChange={handleChange}
          label="Email"
          fullWidth
          required
          error={!!emailError}
          helperText={emailError}
          style={{ marginBottom: 20 }}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={submit}
          disabled={!form.date || !form.time || !form.name || !form.email || !!emailError}
        >
          Book Now
        </Button>
      </CardActions>
      <CardContent>
        <p style={{ color: 'gray', fontSize: '0.8em' }}>
          Note: Time slots are only available for the selected date.
        </p>
      </CardContent>
    </Card>
  );
}

export default BookingForm;