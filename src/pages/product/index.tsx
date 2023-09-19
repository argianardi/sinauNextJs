import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Definisikan tipe data untuk produk (untuk typescript)
type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const Product = () => {
  // Deklarasikan state "products" menggunakan useState
  const [products, setProducts] = useState([]);

  // Gunakan useEffect untuk mengambil data produk saat komponen dimuat
  useEffect(() => {
    // Panggil fungsi getProducts saat komponen/halaman pertama kali diload
    getProducts();
  }, []);

  // Fungsi async untuk mengambil data produk dari API menggunakan Axios
  const getProducts = async () => {
    try {
      // Kirim GET Request ke endpoint 'api/products'
      const response = await axios.get('api/products');
      console.log({ response });
      setProducts(response.data.data);
      // Atur state "products" dengan data produk dari api response
    } catch (error) {
      // error handling
      console.log('terjadi kesalahan: ', error);
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      <ul style={{ marginLeft: '50px', marginTop: '20px' }}>
        {/* Buat list rendering untuk menampilkan data produk ke komponen Product */}
        {products.map((product: productType) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
