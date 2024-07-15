import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import db from '../utils/db'; // Import MongoDB connection

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await db(); // Connect to MongoDB if not already connected

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        history.push('/login'); // Redirect to login page on successful signup
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An unexpected error occurred!');
    }
  };

  return (
    <></>
  );
};

export default SignupPage;
