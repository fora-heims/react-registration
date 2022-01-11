import React from 'react';
import './Header.css';
import classNames from 'classnames';

export default function Header({ type, setType }) {
  return (
    <header>
      <h2
        className={classNames({ active: type === 'signin' })}
        onClick={() => {
          setType('signin');
        }}
      >
        Sign In
      </h2>
      <h2
        className={classNames({ active: type === 'signup' })}
        onClick={() => {
          setType('signup');
        }}
      >
        Sign Up
      </h2>
    </header>
  );
}
