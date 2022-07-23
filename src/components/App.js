import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Store from "./Store";
import StoreHome from "./StoreHome";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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