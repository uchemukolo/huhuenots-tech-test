import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders page title correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Product Finder')).toBeInTheDocument();
  });
  test('renders user name in page header', () => {
    const { getByText } = render(<App />);
    expect(getByText('Professional Investor')).toBeInTheDocument();
  });
});
 