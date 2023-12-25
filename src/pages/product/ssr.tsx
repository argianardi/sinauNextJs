import React from 'react';
import styles from '@/views/Product/Product.module.scss';
import axios from 'axios';
import ProductFromServer from '@/views/Product/ProductFromServer';
import { productType } from '@/types/product.type';

const ProductPage = ({ products }: { products: productType[] }) => {
  return <ProductFromServer products={products} title={'Product Page (SSR)'} />;
};

export default ProductPage;

// Function getServerSideProps Di panggil setiap melakukan request (setiap halamannya dibuka)
// Menggunakan axios
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

// Menggunakan fetch default javascript
// export async function getServerSideProps() {
//   try {
//     const res = await fetch('http://localhost:3000/api/products');
//     const response = await res.json();
//     return {
//       props: {
//         products: response.data,
//         apiError: null,
//       },
//     };

//     console.log(res);
//   } catch (error) {
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// }
