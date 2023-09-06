import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/product');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Belum punya akun?, Register <Link href={'/auth/register'}>di sini</Link>{' '}
      </p>
    </div>
  );
};

export default LoginPage;
