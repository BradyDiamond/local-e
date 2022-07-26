import React from 'react'
import "./Delivery.css"
import moment from 'moment';
import ProductCheckout from './ProductCheckout';
import CurrencyFormat from 'react-currency-format';




export function Delivery({ delivery }) {
  return (
    <div className='delivery'>
      <h2>Delivery</h2>
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
        hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h2 className='delivery-total'> Delivery Total: {value} </h2>
        )}
        decimalScale={2}
        value={delivery.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
          />
          </div>

  )
}

export default Delivery