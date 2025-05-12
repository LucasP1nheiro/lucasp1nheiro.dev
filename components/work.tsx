'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const pathVariants: Variants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: (custom: number) => ({
    y: -3,
    opacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'easeInOut',
      delay: 0.2 * custom,
    },
  }),
};

const Work = () => {
  const controls = useAnimation();

  return (
    <div
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
      className="flex gap-4  rounded-md group py-4 px-2"
    >
      <div className="cursor-pointer select-none rounded-md transition-colors duration-200 flex items-center justify-center w-fit h-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ overflow: 'visible' }}
        >
          <motion.path
            d="M10 2v2"
            animate={controls}
            variants={pathVariants}
            custom={0.2}
          />
          <motion.path
            d="M14 2v2"
            animate={controls}
            variants={pathVariants}
            custom={0.4}
          />
          <motion.path
            d="M6 2v2"
            animate={controls}
            variants={pathVariants}
            custom={0}
          />
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-accent-foreground">
          Product Building
        </h3>
        <p className="text-muted-foreground">
          I'm currently dedicating my time to building a SaaS product, applying
          my full-stack skills to solve real-world problems through scalable
          technology.
        </p>
      </div>
    </div>
  );
};

export { Work };
