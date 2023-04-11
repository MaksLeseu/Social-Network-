import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state from "./Redux/state";
import store from "./Redux/state";

test('renders learn react link', () => {
  render(<App store={store} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
