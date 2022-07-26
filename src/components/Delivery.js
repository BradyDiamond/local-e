import React from 'react'
import "./Delivery.css"
import moment from 'moment';
import ProductCheckout from './ProductCheckout';


function Delivery( {delivery }) {
  return (
    <div className='delivery'>
      Delivery
      <p>{moment.unix(delivery.data.created).format("MMM do YYYY, h:mma")}</p>
      <p className='delivery-id'>
          <small>{delivery.id}</small>
      </p>
      {delivery.data.cart?.map(item => (
      <ProductCheckout
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
      ))}
  
      </div>

  )
}

export default Delivery