import React, { useContext } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';
import { ProductContext } from '../ProductProvider';

ProductList.propTypes = {};

function ProductList() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
