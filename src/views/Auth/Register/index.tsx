import Link from 'next/link';
import React from 'react';
import style from './Register.module.scss';

const RegisterViews = () => {
  return (
    <div className={style.layout}>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun?, Login <Link href={'/auth/login'}>di sini</Link>
      </p>
    </div>
  );
};

export default RegisterViews;
