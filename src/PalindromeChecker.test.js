/* eslint-disable testing-library/prefer-screen-queries */
// src/PalindromeChecker.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PalindromeChecker from './PalindromeChecker';

describe('PalindromeChecker component', () => {
  it('displays correct message for palindrome input', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<PalindromeChecker />);
    const inputField = getByPlaceholderText('Enter a string...');
    const button = getByText('Check Palindrome');

    fireEvent.change(inputField, { target: { value: 'radar' } });
    fireEvent.click(button);

    expect(getByTestId('result')).toHaveTextContent('It is a palindrome!');
  });

  it('displays correct message for non-palindrome input', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<PalindromeChecker />);
    const inputField = getByPlaceholderText('Enter a string...');
    const button = getByText('Check Palindrome');

    fireEvent.change(inputField, { target: { value: 'hello' } });
    fireEvent.click(button);

    expect(getByTestId('result')).toHaveTextContent('It is not a palindrome.');
  });
});
