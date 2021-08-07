import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router,} from "react-router-dom";
import {createMemoryHistory} from 'history'
import RestaurantsContextProvider from "../context/RestaurantsContext";
import Header from './Header';
const history = createMemoryHistory()

test('render Restaurants link', () => {
  render(
    <RestaurantsContextProvider>
      <Router history={history}>
        <Header />
      </Router>
    </RestaurantsContextProvider>
  );
  expect(screen.getByText(/Restaurants/)).toBeInTheDocument();
})
