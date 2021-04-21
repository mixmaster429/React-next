import React from 'react';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="//">
      <img src="imgs/logo.png" alt="logo" style={{ cursor: 'pointer' }} />
    </Link>
  );
};
