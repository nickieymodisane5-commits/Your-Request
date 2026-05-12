import { motion, useMotionValue, useSpring, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export const Counter = ({ value, suffix = '', label }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <div className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-white flex justify-center items-center">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <p className="text-white/50 text-sm uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
};
