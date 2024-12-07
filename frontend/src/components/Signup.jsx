import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory(); // To redirect after signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      // Example: Replace this with your actual signup logic
      const response = await fetch('http://your-backend-api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to login after successful signup
        history.push('/login');
      } else {
        setErrorMessage('Signup failed. Please try again.');
      }
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
