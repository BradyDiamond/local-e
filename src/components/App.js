import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Store from "./Store";
import StoreHome from "./StoreHome";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <React.Fragment>
    <Router>
      <div className="app">
          <Switch>
            <Route exact path="/" component={Home}>
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/storehome" component={StoreHome}>
              <Navbar />
              <StoreHome />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
  }
  
  export default App;