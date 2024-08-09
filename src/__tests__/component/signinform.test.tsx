import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInForm from '@/components/SignInForm';

test('renders SignInForm component correctly', () => {
  render(<SignInForm />);

  // Check if the title is rendered
  expect(screen.getByText(/All souls welcome/i)).toBeInTheDocument();

  // Check if the form fields are rendered
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Check if the button is rendered
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();

  // Check if the links are rendered
  expect(screen.getByText(/Forgot password\?/i)).toBeInTheDocument();
  expect(screen.getByText(/Start a 14 day free trial/i)).toBeInTheDocument();
});

test('handles input change', () => {
  render(<SignInForm />);

  const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');

  const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  expect(passwordInput.value).toBe('password123');
});