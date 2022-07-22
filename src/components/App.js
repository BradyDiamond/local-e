import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
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
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
  }
  
  export default App;