// src/Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    render(<Counter />);
    // Check if the initial count is 0
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test('increments count by 1 when Increment button is clicked', () => {
    render(<Counter />);
    // Get the Increment button
    const incrementButton = screen.getByRole('button', { name: /Increment/i });

    // Simulate a button click
    fireEvent.click(incrementButton);

    // Check if the count has incremented to 1
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test('decrements count by 1 when Decrement button is clicked', () => {
    render(<Counter />);
    // Get the Increment button and click it once to set count to 1
    const incrementButton = screen.getByRole('button', { name: /Increment/i });
    fireEvent.click(incrementButton);

    // Get the Decrement button
    const decrementButton = screen.getByRole('button', { name: /Decrement/i });

    // Simulate a button click
    fireEvent.click(decrementButton);

    // Check if the count has decremented back to 0
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
