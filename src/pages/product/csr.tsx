import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/product.module.scss';
import useSWR from 'swr';
import { fetcher } from '@/utils/swr/fetcher';
import ProductFromServer from '@/views/Product/ProductFromServer';

const ProductPage = () => {
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get('api/products');
  //     // console.log(response.data.data);
  //     setProducts(response.data.data);
  //   } catch (error) {
  //     console.log('terjadi kesalahan: ', error);
  //   }
  // };

  const { data, error, isLoading } = useSWR('/api/products', fetcher);

  return <ProductFromServer products={isLoading ? [] : data.data} />;
};

export default ProductPage;
