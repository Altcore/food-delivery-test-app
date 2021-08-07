import React from "react";
import {Switch, BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantsContextProvider from "./context/RestaurantsContext";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Header from "./components/Header";
import './App.scss';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path='/restaurants/:restaurantId'>
            <RestaurantPage />
          </Route>
        </Switch>
      </Router>
    </RestaurantsContextProvider>
  );
};

export default App;

