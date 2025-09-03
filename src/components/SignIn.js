import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import api from '../api/api';
import Register from './Register';
function SignIn() {
  const [passwordError, setPasswordError] = useState([]);
  const [emailError, setEmailError] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

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
      await api.post('/signin', form);
      alert('Successfully signed in!');
      setForm({
        name: '',
        email: '',
        password: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card component="form" style={{ minWidth: 400, margin: 'auto', marginTop: 200, padding: 20 , borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardContent>
        <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Sign In</h2>
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
        <TextField
          name="password"
          value={form.password}
          onChange={handleChange}
          label="Password"
          fullWidth
          required
          // error={!!passwordError}
          // helperText={passwordError}
          style={{ marginBottom: 20 }}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          //onClick={submit}
          disabled={!form.password || !form.email || !!emailError}
        >
          Sign In
        </Button>
      </CardActions>
      <Register/>
      <a href="/bookings" style={{ marginTop: 10 , textDecoration: 'none'}}>Continue as guest</a>
    </Card>
  );
}

export default SignIn;