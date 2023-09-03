import Navbar from '@/components/fragments/Header';
import React from 'react';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
