import './AuthForm.css';

import React from 'react';

export default function AuthForm() {
  return (
    <form>
      <h2>Sign In / Sign Up</h2>
      <p>message</p>
      <label>
        Email:
        <input type="text" placeholder="email" />
      </label>
      <label>
        Password:
        <input type="text" placeholder="password" />
      </label>
      <input type="submit" value="sign in / sign up" />
    </form>
  );
}
