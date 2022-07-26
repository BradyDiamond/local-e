import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
import { getCartTotal } from './reducer';
import { useHistory } from "react-router-dom"

function Subtotal() {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        prefix={"$"}
      />

    <button onClick={event => history.push('/payment')}>Checkout</button>
    </div>
  )
}

export default Subtotal