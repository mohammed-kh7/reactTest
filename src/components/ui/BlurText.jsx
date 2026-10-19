import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const BlurText = ({ text, className = '', delay = 0 }) => {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.blur-word');
    gsap.set(words, { opacity: 0, filter: 'blur(12px)', y: 20 });

    gsap.to(words, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      delay,
      ease: 'power3.out',
    });
  }, [prefersReduced, delay]);

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={containerRef} className={className}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="blur-word"
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default BlurText;
