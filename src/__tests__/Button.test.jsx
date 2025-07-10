import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const Button = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    style={{ padding: '8px 16px', borderRadius: '4px' }}
  >
    {children}
  </button>
);

describe('Button Component', () => {
  test('renders with correct styles across browsers', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    
    // Verify basic styling that should work in all supported browsers
    expect(button).toHaveStyle('padding: 8px 16px');
    expect(button).toHaveStyle('border-radius: 4px');
  });

  test('handles clicks consistently', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = screen.getByRole('button');
    button.click();
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
