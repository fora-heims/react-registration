import { React, useState } from 'react';
import './Auth.css';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { signInUser, signUpUser } from '../../services/users';
import classnames from 'classnames';

export default function Auth({ user, setUser }) {
  const [type, setType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'signin') {
        let response = await signInUser(email, password);
        setUser(response);
      } else {
        let response = await signUpUser(email, password);
        setUser(response);
        setMessage('New User Created. You can now sign in.');
      }
    } catch {
      setMessage('Something went wrong.');
    }
  };

  return (
    <div>
      <button className={classnames({ active: type === 'signup' })} onClick={setType('signup')}>
        sign up
      </button>
      <button className={classnames({ active: type === 'signin' })} onClick={setType('signin')}>
        sign in
      </button>
      <AuthForm {...{ email, setEmail, password, setPassword, handleSubmit, message }} />
    </div>
  );
}
