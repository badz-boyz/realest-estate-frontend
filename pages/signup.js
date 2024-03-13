import React, { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform further actions
    console.log('Name:', name);
    console.log('Email:', email);
    // Reset form fields after submission
    setName('');
    setEmail('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '75px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '36px' }}>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'inline-block',
          border: '2px solid black',
          padding: '20px',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Name:
            <input type="text" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '8px', border: '2px solid black' }} />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '8px', border: '2px solid black' }} />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'darkblue',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
