import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

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
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
  }
  
  export default App;