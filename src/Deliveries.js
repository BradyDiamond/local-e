import React, { useState, useEffect } from 'react';
import './Deliveries.css';
import { db } from "./firebase"
import { useStateValue } from './StateProvider';

function Deliveries() {
  const [{cart, user}, dispatch] = useStateValue();
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => { db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot( snapshot =>(
    
  ) )  }, [])

  return (
    <div className='deliveries'>
      <h1>Recent Deliveries</h1>
    </div>
  )
}

export default Deliveries