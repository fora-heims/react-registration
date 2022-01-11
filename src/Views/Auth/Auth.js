import './Auth.css';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { useState } from 'react';
import Header from '../../components/Header/Header.js';

import React from 'react';
import { signUpUser, signInUser } from '../../services/users';

export default function Auth({ user, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('message');
  const [type, setType] = useState('signin');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response =
        type === 'signin' ? await signInUser(email, password) : signUpUser(email, password);
      setUser(response);
    } catch {
      setMessage('Sorry. Something did not work.');
    }
  };

  return (
    <div className="auth">
      <Header type={type} setType={setType} />
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        message={message}
        submitHandler={submitHandler}
        type={type}
      />
    </div>
  );
}
