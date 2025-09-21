import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface ProgressBarCircleProps {
  percentage: number;
  label: string;
  delay?: number; // Retraso opcional para la animación
}

const ProgressBarCircle: React.FC<ProgressBarCircleProps> = ({ percentage, label, delay = 0 }) => {
  const progress = useMotionValue(0);
  const roundedPercentage = useTransform(progress, Math.round);

  useEffect(() => {
    const animation = animate(progress, percentage, {
      duration: 2.5,
      delay: delay,
      ease: "easeOut",
    });
    return animation.stop; // Limpiar la animación al desmontar
  }, [percentage, delay, progress]);

  const conicGradient = useTransform(progress, p => 
    `conic-gradient(var(--progress-active-color) ${p}%, var(--progress-inactive-color) ${p}%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay + 0.3 }} // Retraso adicional para la aparición del círculo
      className="flex flex-col items-center"
    >
      <motion.div
        className="relative w-32 h-32 rounded-full flex items-center justify-center text-current text-2xl font-bold"
        style={{ background: conicGradient }}
      >
        <div className="absolute inset-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
          <motion.span>{roundedPercentage}</motion.span>%
        </div>
      </motion.div>
      <p className="text-current text-lg mt-4">{label}</p>
    </motion.div>
  );
};

export default ProgressBarCircle;
