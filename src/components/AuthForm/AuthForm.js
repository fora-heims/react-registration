import './AuthForm.css';

import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  message,
  submitHandler,
  type,
}) {
  return (
    <form onSubmit={submitHandler}>
      <h2>{type === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
      <p>{message}</p>
      <label>
        Email:
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="sign in / sign up" />
    </form>
  );
}
