import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    
    const nameRef = useRef()
    const passwordRef = useRef()
    
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();

        const nameValue = nameRef.current.value;
        const passwordValue = passwordRef.current.value;

        if(nameValue === 'admin' && passwordValue === 'admin@123') {
            navigate('/adminbar')
            alert('admin login successful')
        }else{
            alert('invalid username or password')
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
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Admin Login</h1>
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
            onClick={handleSubmit}
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
    </div>
    </div>
   
  )
}

export default AdminLogin