import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductView = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {products?.map((product) => (
          <li>
            {product.name} - {`Size: ${product.size}`}
            <br />
            Harga: Rp {product.price.toLocaleString('id-ID')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductView;
