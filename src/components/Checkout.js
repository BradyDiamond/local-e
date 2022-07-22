import React from 'react';
import './Checkout.css';
import checkoutBanner from "./../img/checkoutbanner.png";
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';





function Checkout() {

  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className='checkout-left'>
        <img className='checkout-banner' src={checkoutBanner}/>
        <div>
          <h2 className="checkout-title">Cart</h2>
          
          {cart.map(item => (
          <ProductCheckout 
          id= {item.id}
          title= {item.title} 
          image= {item.image}
          price= {item.price}
          rating= {item.rating} 
          />
        ))}
      
        </div>
      </div>

  
      <div className='checkout-right'>
    
      </div>
  
    </div>
    

  );
}

export default Checkout
