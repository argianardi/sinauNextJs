import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import style from './Login.module.css';

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push('/product');
  };

  return (
    <div className={style.layout}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p
        style={{
          border: '1px solid blue',
          marginTop: '10px',
          borderRadius: '10px',
          padding: '8px',
        }}
      >
        Belum punya akun?, Register <Link href={'/auth/register'}>di sini</Link>{' '}
      </p>
    </div>
  );
};

export default LoginViews;
