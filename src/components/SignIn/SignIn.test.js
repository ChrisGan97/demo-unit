import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from './SignIn.jsx';

test('signin form field is rendered', () => {
    render(<SignIn />);
    const form = screen.getByTestId('signin-form');
    expect(form).toBeInTheDocument();
});

test('email input field is rendered', () => {
    render(<SignIn />);
    const input = screen.getByTestId('email-input');
    expect(input).toBeInTheDocument();
});

test('password input field is rendered', () => {
    render(<SignIn />);
    const input = screen.getByTestId('password-input');
    expect(input).toBeInTheDocument();
});

test('sign-in checkbox is rendered', () => {
    render(<SignIn />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
});

test('signin button is rendered', () => {
    render(<SignIn />);
    const button = screen.getByTestId('signin-button');
    expect(button).toBeInTheDocument();
});

test("sign in button has text 'Sign In' ", () => {
    render(<SignIn />);
    const button = screen.getByTestId('signin-button');
    expect(button).toHaveTextContent('Sign In');
});
