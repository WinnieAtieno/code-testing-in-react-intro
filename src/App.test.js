import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers
import App from './App';

test('renders Counter and Todo components', () => {
    render(<App />);
    
    // Check if the Counter component is rendered by looking for its initial count text
  
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    
    // Check if the Todo component is rendered by looking for its input field and button
    // Adjust the placeholder and button name to match what is actually rendered by the Todo component
    expect(screen.getByPlaceholderText(/Enter a todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Todo/i })).toBeInTheDocument();
});
