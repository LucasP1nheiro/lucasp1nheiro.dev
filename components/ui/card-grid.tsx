'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from './button';
import Link from 'next/link';

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  stack: string[];
  href: string;
}

interface CardGridProps {
  projects: Project[];
}

const CardGrid: React.FC<CardGridProps> = ({ projects }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    clustered: (index: number) => ({
      rotate: index % 2 === 0 ? -4 : 4,
      x: Math.sin(index * 0.5) * -40,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: index * 0.05,
      },
    }),
    normal: {
      rotate: 0,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const textVariants = {
    clustered: (index: number) => ({
      opacity: 0,
      y: 20,
      transition: { delay: index * 0.05 },
    }),
    normal: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center p-8 my-24 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        className={`flex ${isHovered ? 'gap-12' : 'gap-0'} relative justify-center overflow-hidden py-2 w-full`}
      >
        {projects.map((project, index) => (
          <MorphingDialog
            key={project.title}
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <MorphingDialogTrigger>
              <motion.div
                className="text-center"
                layout
                whileHover={{ zIndex: 50 }}
              >
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="clustered"
                  animate={isHovered ? 'normal' : 'clustered'}
                  className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-background"
                >
                  <MorphingDialogImage
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  custom={index}
                  variants={textVariants}
                  initial="clustered"
                  animate={isHovered ? 'normal' : 'clustered'}
                  className="text-lg text-muted-foreground mt-3 font-semibold"
                >
                  <MorphingDialogTitle>{project.title}</MorphingDialogTitle>
                  <MorphingDialogDescription> </MorphingDialogDescription>
                </motion.div>
              </motion.div>
            </MorphingDialogTrigger>

            <MorphingDialogContainer>
              <MorphingDialogContent
                className="pointer-events-auto relative max-w-96 border bg-background rounded-lg"
                // transition={{ type: 'spring', bounce: 0.1 }}
              >
                <MorphingDialogImage
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-md w-96 object-cover"
                />

                <div className="space-y-4 mt-8 p-4">
                  <MorphingDialogTitle className="text-2xl font-bold">
                    {project.title}
                  </MorphingDialogTitle>

                  <MorphingDialogDescription className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <div
                          className={cn(
                            'animate-shine items-center justify-center rounded-full border border-white/10 font-medium text-neutral-200 transition-colors',
                            'bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] bg-[length:400%_100%] px-3 py-1 text-xs dark:text-neutral-400',
                          )}
                          key={tech}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <Button className="group" variant={'ghost'}>
                      <Link
                        href={project.href}
                        className="flex items-center gap-2"
                      >
                        View more{' '}
                        <ArrowRight
                          className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </Link>
                    </Button>
                  </MorphingDialogDescription>
                </div>

                <MorphingDialogClose className="absolute right-4 top-4" />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardGrid;
