import React, { useState, useEffect } from 'react';
import './Deliveries.css';
import { db } from "./firebase"
import { useStateValue } from './StateProvider';
import { Delivery } from './Delivery' 

function Deliveries() {
  const [{cart, user}, dispatch] = useStateValue();
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    if(user) {
    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot( snapshot => ( setDeliveries(snapshot.docs.map(doc => 
      ({
        id: doc.id,
        data: doc.data()
      })))
      ))
      } else {
        setDeliveries([])
      }
      }, [user])

  return (
    <div className='deliveries'>
      <h1>Recent Deliveries</h1>
      <div className='deliveries'>
        {deliveries?.map(delivery => (
          <Delivery  delivery={delivery} />
        ))}
      </div>
    </div>
  )
}

export default Deliveries;