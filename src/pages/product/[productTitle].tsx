import { useRouter } from 'next/router';
import React from 'react';

const DetailProduct = () => {
  const { query } = useRouter();
  console.log(query.productTitle);

  return <div>{query.productTitle}</div>;
};

export default DetailProduct;
