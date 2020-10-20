import React, { useEffect, useState } from "react";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <RestaurantMenu />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
