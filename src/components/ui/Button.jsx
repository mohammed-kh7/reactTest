import React from 'react';

const Button = ({ children, variant = 'primary', disabled, onClick, className, text }) => {
  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variants = {
    primary: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#1e293b',
      color: '#e2e8f0',
      border: '1px solid #334155',
    },
    danger: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
    },
  };

  const style = {
    ...baseStyle,
    ...variants[variant],
    ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {text || children}
    </button>
  );
};

export default Button;