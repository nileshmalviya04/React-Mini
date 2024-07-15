import React, { useState, useEffect } from 'react';
import db from '../utils/db'; // Import MongoDB connection

const UsersList = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await db(); // Connect to MongoDB if not already connected

        const response = await fetch('/api/users');
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setUsers(data.users);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('An unexpected error occurred!');
      }
    };

    fetchUsers();
  }, []); // Empty dependency array for fetching users on initial render only

  return (
    <div>
      <h2>Users List</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UsersList;
