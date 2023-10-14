import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/product.module.scss';
import useSWR from 'swr';
import { fetcher } from '@/utils/swr/fetcher';
import Link from 'next/link';

type productType = {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
};

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

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {isLoading ? (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        ) : (
          <>
            {data.data?.map((product: productType) => (
              <Link
                href={`/product/csr/${product.id}`}
                key={product.id}
                className={styles.product__content__item}
              >
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
