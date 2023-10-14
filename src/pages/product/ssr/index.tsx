import React from 'react';
import styles from '@/styles/product.module.scss';
import axios from 'axios';
import Link from 'next/link';

type productType = {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductPage = ({ products }: { products: productType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {/* List product */}
            {products?.map((product: productType) => (
              <Link
                href={`/product/ssr/${product.id}`}
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
        ) : (
          // Sekeleton
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/products');

    return {
      props: {
        products: response.data.data,
        apiError: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
