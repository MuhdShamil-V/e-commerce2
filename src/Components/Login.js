import React, { useContext, useRef } from 'react';
import { myContext } from './Context';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const { user, setLogin } = useContext(myContext);

  const nameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const PasswordValue = passwordRef.current.value;

    const findUser = user.find((users) => users.name === nameValue);

    if (findUser && findUser.password === PasswordValue) {
      setLogin(true);

      alert('Login Successful');
      navigate('/');
    } else {
      alert('Invalid Username or Password');
    }
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
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Login</h1>
        <input
          type="text"
          placeholder="Enter the Username"
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
        <button
          onClick={handleLogin}
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
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
