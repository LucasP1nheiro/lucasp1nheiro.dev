'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.5, 1],
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
};

const Certification = () => {
  const controls = useAnimation();

  return (
    <div
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
      className="flex gap-4 rounded-md py-4 px-2"
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
        >
          <motion.path
            variants={pathVariants}
            initial="normal"
            animate={controls}
            d="M4 12 9 17L20 6"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          AWS Academy Graduate - Cloud Architecting
        </h3>
        <p className="text-muted-foreground">
          Certified in{' '}
          <a
            href="https://www.credly.com/badges/8c81c14d-32dd-4d69-9161-b2b23a8d9675/linked_in?t=som1sv"
            className="text-foreground font-semibold underline"
          >
            AWS Cloud Architecting
          </a>
          , with in-depth knowledge of key cloud services and their
          applications.
        </p>
      </div>
    </div>
  );
};

export { Certification };
