import React from 'react';

const Card = ({ title, description, image, children }) => {
  return (
    <div className="custom-card">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      {children && <div className="card-footer">{children}</div>}
    </div>
  );
};

export default Card;
