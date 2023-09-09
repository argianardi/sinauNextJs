import Navbar from '@/components/fragments/Header';
import { useRouter } from 'next/router';
import React from 'react';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const { pathname } = useRouter();
  const disabledNavbar = ['/auth/login', '/auth/register'];

  return (
    <main>
      {!disabledNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
