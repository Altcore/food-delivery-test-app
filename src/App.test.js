import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders logo text in the header', () => {
  render(<App />);
  const logoElement = screen.getByText(/Feed me/i);
  expect(logoElement).toBeInTheDocument();
});
