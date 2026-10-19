import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="skeleton-box">
      <div className="skeleton-line" style={{ width: '60%', height: '20px', background: '#1e293b', borderRadius: '4px', margin: '8px 0' }}></div>
      <div className="skeleton-line" style={{ width: '40%', height: '20px', background: '#1e293b', borderRadius: '4px', margin: '8px 0' }}></div>
    </div>
  );
};

export default LoadingSkeleton;