
import React from 'react'
import'./ProductCheckout.css'
import { useStateValue } from './StateProvider';

function ProductCheckout({id, image, title, price, rating, hideButton}) {
  const [{ cart } , dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type:"REMOVE_FROM_CART",
      id: id,
    });
  };


  return (
    <div className='productCheckout'>
      <img className='productCheckout-image' src={image} />
      <div className='productCheckout-info'>
        <p className='productCheckout-title'>{title}</p>
        <p className='productCheckout-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map((_, i) =>(
          <p>⭐</p>
          ))}
        </div>
        {!hideButton && (
        <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>  
  )
};

export default ProductCheckout