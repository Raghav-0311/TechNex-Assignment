import React from 'react';
import Card from './Card';
import "../styles/products.css";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div className='products_container'>
      {
        data?.map((product) => (<Card key={product.id} product={product} />))
      }
    </div>
  )
}

export default Products
