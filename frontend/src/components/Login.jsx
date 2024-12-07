import React, { useState } from 'react';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // On success, save the token
        localStorage.setItem('token', data.token);  // Store token in localStorage
        alert('Login successful!');
        // Optionally redirect or update the UI to show logged-in status
      } else {
        setErrorMessage(data.message || 'Invalid credentials');
      }
    } else {
      setErrorMessage('Please enter both username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>

      <style>{`
        div {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
        }

        h2 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 8px;
          font-weight: bold;
          color: #555;
        }

        input {
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
        }

        input:focus {
          border-color: #007bff;
        }

        button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        p {
          font-size: 14px;
          color: red;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default Login;
