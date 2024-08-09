import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';
import SignInForm from '@/components/SignInForm';

// Mocking the SignInForm component correctly
jest.mock('../../components/SignInForm', () => () => <div>Mocked SignInForm</div>);

describe("Home component", () => {
  test('renders without crashing', () => {
    render(<Home />);
});

  test('renders the SignInForm component', () => {
    render(<Home />);
    expect(screen.getByText('Mocked SignInForm')).toBeInTheDocument();
  });
});