import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const CounterAnimation = ({ end, duration = 2, suffix = '', prefix = '', className = '' }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(end);
      return;
    }

    if (!ref.current) return;

    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => setDisplay(Math.round(obj.val)),
        });
      },
    });

    return () => trigger.kill();
  }, [end, duration, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
};

export default CounterAnimation;
