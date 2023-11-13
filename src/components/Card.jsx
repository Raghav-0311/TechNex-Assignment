import React from 'react'
import "../styles/card.css";

const Card = ({ product }) => {
  const { title, rating, price, thumbnail, discountPercentage, description, category, brand } = product;
  return (
    <div className='card_container'>
      <img src={thumbnail} alt={title} />

      <div className="card_info">
        <div className="row">
          <h1 className="title">{title}</h1>
          <p className="rating">{rating}/5.00</p>
        </div>

        <div className="row">
          <h1 className="brand">{brand}</h1>
          <p className="category">{category}</p>
        </div>

        <div className="row">
          <p className="description">{description}</p>
        </div>

        <div className="row">
          <h1 className="discount">Discount : {discountPercentage}%</h1>
          <p className="price">$ {price}/-</p>
        </div>
      </div>
    </div>
  )
}

export default Card
