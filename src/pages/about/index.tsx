import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const About = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      router.push('/auth/login');
    }
  }, []);

  return <div>About</div>;
};

export default About;
