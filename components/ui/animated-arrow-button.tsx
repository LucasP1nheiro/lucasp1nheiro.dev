'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';

const pathVariants = {
  normal: { d: 'M5 12h14' },
  animate: {
    d: ['M5 12h14', 'M5 12h9', 'M5 12h14'],
    transition: { duration: 0.4 },
  },
};

const secondaryPathVariants = {
  normal: { d: 'm12 5 7 7-7 7', translateX: 0 },
  animate: {
    d: 'm12 5 7 7-7 7',
    translateX: [0, -3, 0],
    transition: { duration: 0.4 },
  },
};

const AnimatedArrowButton = () => {
  const controls = useAnimation();

  return (
    <Button
      variant="ghost"
      className="group"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <span className="mr-2">View more</span>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M5 12h14"
            variants={pathVariants}
            animate={controls}
          />
          <motion.path
            d="m12 5 7 7-7 7"
            variants={secondaryPathVariants}
            animate={controls}
          />
        </svg>
      </div>
    </Button>
  );
};

export default AnimatedArrowButton;
