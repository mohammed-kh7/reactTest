import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const LightRays = ({ color = '#2563eb' }) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <div className="light-rays-container" aria-hidden="true">
      <div
        className="light-ray light-ray-1"
        style={{ '--ray-color': color }}
      />
      <div
        className="light-ray light-ray-2"
        style={{ '--ray-color': color }}
      />
      <div
        className="light-ray light-ray-3"
        style={{ '--ray-color': color }}
      />
    </div>
  );
};

export default LightRays;
