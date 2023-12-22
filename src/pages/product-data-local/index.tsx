import ProductView from '@/views/Product/ProductView';
import React, { useEffect, useState } from 'react';

const ProductDataLocalPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products-data-local')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data);
      });
  }, []);

  return <ProductView products={products} />;
};

export default ProductDataLocalPage;
