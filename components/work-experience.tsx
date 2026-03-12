'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { Badge } from './ui/badge';

interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string[];
  stack: string[];
}

const experiences: Experience[] = [
  {
    company: 'Intranet Mall',
    role: 'Software Developer',
    period: 'Feb 2025 — Present',
    current: true,
    description: [
      'Built nine frontend projects from scratch with a strong focus on performance using Next.js, including three multi-tenant applications.',
      'Rebuilt legacy sites in Next.js achieving a perfect 100 SEO score on Lighthouse.',
      'Integrated third-party APIs for features like parking reservation and event registration.',
      'Resolved race conditions in the event registration system using database locks to ensure isolation between concurrent transactions and prevent duplicate records.',
      'Maintained and evolved over 20 shopping mall websites in production serving thousands of daily users.',
    ],
    stack: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'Fastify', 'Kysely', 'PayloadCMS', 'Zod', 'Zustand'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Oct 2024',
    current: false,
    description: [
      'Developed a dermatologist website using Next.js and React, focused on performance, SEO, and patient conversion.',
      'Developed a tattoo artist website with a custom CMS for portfolio and content management, using Next.js, Prisma, and Better Auth for authentication and access control.',
    ],
    stack: ['Next.js', 'React', 'Prisma', 'Better Auth'],
  },
];

const dotVariants: Variants = {
  normal: {
    scale: 1,
    backgroundColor: 'hsl(var(--muted))',
  },
  animate: {
    scale: 1.3,
    backgroundColor: 'hsl(var(--primary))',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceItem = ({ experience, isLast }: ExperienceItemProps) => {
  const controls = useAnimation();

  return (
    <div
      className="relative flex gap-6 group"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 border-2 border-border"
          variants={dotVariants}
          animate={controls}
          initial="normal"
        />
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">
            {experience.role}
          </h3>
          {experience.current && (
            <Badge className="text-xs uppercase bg-primary/10 text-primary border-0 hover:bg-primary/20">
              Current
            </Badge>
          )}
        </div>

        <p className="text-sm font-medium text-muted-foreground mb-1">
          {experience.company}
        </p>

        <p className="text-xs text-muted-foreground mb-3">
          {experience.period}
        </p>

        <ul className="text-muted-foreground text-sm leading-relaxed mb-3 list-disc list-inside space-y-1">
          {experience.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-secondary/50 dark:bg-secondary/10 text-secondary-foreground dark:text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div className="mt-2">
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.company}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export { WorkExperience };
