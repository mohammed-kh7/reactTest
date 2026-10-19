import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
}) => {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    const offsets = {
      up: { y: 60, x: 0 },
      down: { y: -60, x: 0 },
      left: { y: 0, x: -60 },
      right: { y: 0, x: 60 },
    };

    const { x, y } = offsets[direction] || offsets.up;

    gsap.set(ref.current, { opacity: 0, y, x });

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
        });
      },
    });

    return () => trigger.kill();
  }, [prefersReduced, direction, delay, duration]);

  return (
    <div ref={ref} className={className} style={prefersReduced ? {} : { willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

export default ScrollReveal;
