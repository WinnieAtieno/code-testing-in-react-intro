// src/Todo.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers
import Todo from './Todo';

describe('Todo Component', () => {
  test('renders input field and button', () => {
    render(<Todo />);
    // Verify the input field and button are present
    expect(screen.getByPlaceholderText(/Enter a todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Todo/i })).toBeInTheDocument();
  });

  test('adds todo item to the list', () => {
    render(<Todo />);
    
    // Type a new todo item
    fireEvent.change(screen.getByPlaceholderText(/Enter a todo/i), {
      target: { value: 'Buy groceries' },
    });
    
    // Click the Add Todo button
    fireEvent.click(screen.getByRole('button', { name: /Add Todo/i }));
    
    // Check if the new todo item appears in the list
    expect(screen.getByText(/Buy groceries/i)).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<Todo />);
    
    // Click the Add Todo button without typing anything
    fireEvent.click(screen.getByRole('button', { name: /Add Todo/i }));
    
    // Check that no todo item is added
    // Ensure the list of todos remains empty or does not include any specific text
    expect(screen.queryByText(/Buy groceries/i)).not.toBeInTheDocument();
  });
});
