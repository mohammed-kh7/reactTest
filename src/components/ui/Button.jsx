import React from 'react';

const Button = ({ children, variant = 'primary', disabled, onClick, className, text }) => {
  const baseStyle = {
    padding: '10px 20px',
    minHeight: '44px',
    minWidth: '44px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
    },
    secondary: {
      backgroundColor: '#1e293b',
      color: '#e2e8f0',
      border: '1px solid #334155',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    },
    danger: {
      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
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