import { fetcher } from '@/utils/swr/fetcher';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import styles from '@/styles/DetailProduct.module.scss';

type productType = {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
};

const DetailProduct = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    `/api/products/${query.productTitle}`,
    fetcher
  );

  const product: productType = data?.data;

  return (
    <div>
      <h1>Detail Product</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product?.image} alt={product?.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product?.name}</h4>
        <p className={styles.productDetail__category}>{product?.category}</p>
        <p className={styles.productDetail__price}>
          {product?.price?.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
          })}
        </p>
      </div>
    </div>
  );
};

export default DetailProduct;
