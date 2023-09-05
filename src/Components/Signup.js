import React, { useContext, useRef, useState } from 'react';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(myContext);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;


    if (!nameValue || !emailValue || !passwordValue) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (passwordValue.length < 4) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

      const isEmailValid = emailValue.includes('@') && emailValue.includes('.');

    if (!isEmailValid) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');

    setUser([...user, { name: nameValue, email: emailValue, password: passwordValue, id: Date.now() }]);

    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            ref={nameRef}
            style={{
              padding: '10px',
              margin: '5px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <input
            type="text"
            placeholder="Enter the email"
            ref={emailRef}
            style={{
              padding: '10px',
              margin: '5px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <input
            type="password"
            placeholder="Enter the Password"
            ref={passwordRef}
            style={{
              padding: '10px',
              margin: '5px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          {errorMessage && (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          )}

          <button
            type="submit"
            style={{
              padding: '10px',
              margin: '5px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
