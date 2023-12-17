import { useRouter } from 'next/router';
import React from 'react';

const ShopPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };
  return (
    <div>
      <h2>Detail Shop</h2>
      <p>Path Segments: {slug?.join('/')}</p>
    </div>
  );
};

export default ShopPage;
