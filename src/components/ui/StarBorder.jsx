import React from 'react';

const StarBorder = ({ children, color = '#2563eb', className = '', as: Component = 'button', ...rest }) => {
  return (
    <Component className={`star-border-btn ${className}`} {...rest}>
      <span
        className="star-border-glow"
        style={{ '--border-color': color }}
        aria-hidden="true"
      />
      <span className="star-border-content">{children}</span>
    </Component>
  );
};

export default StarBorder;
