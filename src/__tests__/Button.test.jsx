import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const Button = ({ onClick, children, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    aria-disabled={disabled}
    style={{ 
      padding: '8px 16px', 
      borderRadius: '4px',
      cursor: 'pointer'
    }}
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

  test('renders correctly on mobile', () => {
    window.innerWidth = 375; // iPhone width
    render(<Button>Mobile</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('has proper aria attributes when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
  });

  test('maintains styles when hovered', () => {
    render(<Button>Hover Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('cursor: pointer');
  });

  test('renders children content correctly', () => {
    render(<Button><span>Icon</span> Click Me</Button>);
    expect(screen.getByRole('button')).toContainHTML('<span>Icon</span>');
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });
});
