import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state from "./Redux/store";
import store from "./Redux/store";

test('renders learn react link', () => {
  render(<App store={store} dispatch={store.dispatch.bind(store)} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
