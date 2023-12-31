import React from 'react';

import styles from '@/views/Product/Product.module.scss';
import { productType } from '@/types/product.type';

const ProductFromServer = ({
  products,
  title,
}: {
  products: productType[];
  title: string;
}) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>{title}</h1>
      <div className={styles.product__content}>
        {products.length === 0 ? (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        ) : (
          <>
            {products?.map((product: productType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {product.category}
                </p>
                <p
                  className={`text-sm ${styles.product__content__item__price}`}
                >
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductFromServer;
