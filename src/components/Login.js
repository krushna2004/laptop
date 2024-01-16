// Login.js


import { useNavigate, Link } from 'react-router-dom';

import React from 'react';
import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import  auth from './firebase';

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [user, setUser] = useState('');

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmation = await signInWithPhoneNumber(auth, mobile, recaptcha);
      setUser(confirmation);
    } catch (e) {
      console.error(e);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
      alert('Login successful');
      navigate('/'); // Redirect to the home page after successful login
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <div>
        <div id="recaptcha"></div>
        <input
          type="text"
          onChange={(e) => setMobile(e.target.value)}
          name="mobile"
          placeholder="Enter Mobile Number"
        />
        <button type="button" onClick={sendOtp}>
          Send OTP
        </button>
      </div>
      <h1>OTP</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setOtp(e.target.value)}
          name="otp"
          placeholder="Enter OTP"
          required
        />
        <button type="button" onClick={verifyOtp}>
          Verify OTP
        </button>
      </div>
      
      <p>
        Admin?{' '}
        <Link to="/adminlogin">Admin Login</Link>
      </p>
    </div>
  );
};

export default Login;
