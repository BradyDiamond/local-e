import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import ProductCheckout from './ProductCheckout';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import './Payment.css'
import { db } from "./firebase";


function Payment() {
  const [{cart, user}, dispatch] = useStateValue();
  const [errorHandle, setErrorHandle] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() =>  {
    const getClientSecret = async () => {
      const response = await axios({ method: "post", url: `/payments/create?total=${getCartTotal(cart) * 100}`});
      setClientSecret(response.data.clientSecret)} 
      getClientSecret();
  }, [cart])

  const handleSubmit = async (event)  => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)}}).then(({paymentIntent}) => {

      db
      .collection('users')
      .doc(user?.uid)
      .collection('deliveries')
      .doc(paymentIntent.id)
      .set({
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created})
      setPaymentSucceeded(true); 
      setErrorHandle(null)
      setProcessing(false)
      dispatch({type: 'EMPTY_CART'})
      history.replace('./deliveries')
    })

  };
  const handleChange = event =>{
    setDisabledButton(event.empty);
    setErrorHandle(event.errorHandle ? event.errorHandle.message : "");
  };

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout (<Link to="/checkout">{cart?.length} items</Link>)</h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>delivery Address</h3>
          </div>
          <div className='payment-address'> 
            <p>{user?.email}</p>
            <p>123 react lane</p>
            <p>portland, OR</p>
          </div>
        </div>

        <div className='payment-section'>
          <div className='payment-title'>
              <h3>Review items and delivery</h3>
          </div>
          <div className='payment-items'>
              {cart.map(item=> (
                <ProductCheckout
                id= {item.id}
                title= {item.title} 
                image= {item.image}
                price= {item.price}
                rating= {item.rating} />
              ))}
          </div>
        </div>

        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-form'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
                <div className='payment-price-container'>
                <CurrencyFormat
                renderText={(value) => (
                <>     
                  <h3>order total: {value}</h3>             
                </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                prefix={"$"}/>
                <button disabledButton = { disabledButton || processing || paymentSucceeded }>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>             
                </div>
                {errorHandle && <div>{errorHandle}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment