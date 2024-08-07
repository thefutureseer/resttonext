// __tests__/SignInForm.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignInForm from '../components/SignInForm';

describe('SignInForm', () => {
  it('renders the form correctly', () => {
    render(<SignInForm />);
    // Check if email input field is rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    // Check if password input field is rendered
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    // Check if submit button is rendered
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
});
