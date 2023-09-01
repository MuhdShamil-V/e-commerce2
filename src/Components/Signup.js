import React, { useContext, useRef } from 'react';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(myContext);

  const nameRef = useRef({});
  const emailRef = useRef({})
  const passwordRef = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const PasswordValue = passwordRef.current.value;

    setUser([...user, { name: nameValue, email: emailValue, password: PasswordValue, id: Date.now() }]);
    console.log(user);

    if(PasswordValue.length && nameValue.length>0){
      navigate('/login');
    }else{
      alert('enter a valid username and password')
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
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Signup</h1>
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
          type="email"
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
          Submit
        </button>
      </div>
    </div>
  );
}

export default Signup;
