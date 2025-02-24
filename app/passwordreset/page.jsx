"use client";
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail,  } from "firebase/auth";
import { toast } from 'react-toastify';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    // console.log(auth)
    
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
      toast.success("Password Resate Mail Send Successfully")
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <main>

        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>

        <h1>Password Reset</h1>
        <div className="contact-container">
            <div className="message-section">
                    <h2>Check your email for a reset link.</h2>
                    <p>Follow the instructions to change your password and regain access to your account securely.</p>
            </div>
            <div className="form-section">
                <form  onSubmit={handlePasswordReset}>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    <div className="form-options">
                
                        <a href="/login" className="forgot-password">Login</a>
                    </div>
                    <button type="submit">Forgot Password</button>

                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    </main>
    
  );
};

export default PasswordReset;