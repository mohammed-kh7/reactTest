import React from 'react';

const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`custom-btn btn-${variant} ${disabled ? 'btn-disabled' : ''}`}
    >
      {text}
    </button>
  );
};

export default Button;
