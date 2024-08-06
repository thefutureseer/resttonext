import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';


test('renders greeting: All souls welcome', () => {
  render(<Home />);
  const headingElement = screen.getByText(/All souls welcome/i);
  expect(headingElement).toBeInTheDocument();
});