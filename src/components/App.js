import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Stores from "./Stores";
import StoreHome from "./StoreHome";
import Checkout from "./Checkout";
import Deliveries from "./Deliveries";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js" ;
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51LLtVFFI2k0X6SrBPvBxzN46Q1lHdZudqwAK40tjc1Tc1qkLrdxvlsHOiv08X7S5OObmhJruaGO5eTbxKA7yzQKi0078XbSB5c");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <React.Fragment>
    <Router>
      <div className="app">
          <Switch>
          <Route exact path="/login" component={Login}>
              <Login />
            </Route>
          <Route exact path="/checkout" component={Checkout}>
              <Navbar />
              <Checkout />
              <Footer />
            </Route>
            <Route exact path="/storehome" component={StoreHome}>
              <Navbar />
              <StoreHome />
              <Footer />
            </Route>
            <Route exact path="/stores" component={StoreHome}>
              <Navbar />
              <Stores />
              <Footer />
            </Route>
            <Route exact path="/payment" component={Checkout}>
              <Navbar/>
              <Elements stripe={promise}>
              <Payment />
              </Elements>
              <Footer />
            </Route>
            <Route exact path="/deliveries" component={Deliveries}>
              <Navbar />
              <Deliveries />
              <Footer />
            </Route>
            <Route exact path="/" component={Home}>
              <Navbar />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
  }
  
  export default App;