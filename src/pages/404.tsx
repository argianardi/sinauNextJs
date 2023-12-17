import React, { useEffect, useState } from 'react';
import styles from '@/styles/404.module.scss';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const { asPath } = useRouter();
  const cleanAsPath = asPath.startsWith('/') ? asPath.slice(1) : asPath;
  console.log({ cleanAsPath });

  const [asPathclientRendered, setAsPathclientRendered] = useState('');

  useEffect(() => {
    setAsPathclientRendered(cleanAsPath);
  }, [asPath]);

  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
      <p>
        Halaman <span className={styles.pageText}> {asPathclientRendered}</span>{' '}
        tidak ditemukan
      </p>
    </div>
  );
};

export default Custom404;
