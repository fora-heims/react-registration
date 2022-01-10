import React from 'react';
import './AuthForm.css';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  message,
  type,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{type === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
      <p>{message}</p>
      <label>
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        ></input>
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        ></input>
      </label>
      <submit>{type === 'signin' ? 'Sign In' : 'Sign Up'}</submit>
    </form>
  );
}
