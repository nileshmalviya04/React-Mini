import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import db from '../utils/db'; // Import MongoDB connection

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await db(); // Connect to MongoDB if not already connected

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setUser(data.user); // Update user context on successful login
        history.push('/users'); // Redirect to user list
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred!');
    }
  };

  return (
    <>
    <h1> Hello World</h1>
    </>
  );
};

export default LoginPage;
