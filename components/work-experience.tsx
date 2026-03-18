'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { Badge } from './ui/badge';
import { useTranslations } from 'next-intl';

interface ExperienceData {
  company: string;
  key: string;
  current: boolean;
  descCount: number;
  stack: string[];
}

const experiences: ExperienceData[] = [
  {
    company: 'Intranet Mall',
    key: 'intranet',
    current: true,
    descCount: 5,
    stack: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'Fastify', 'Kysely', 'PayloadCMS', 'Zod', 'Zustand'],
  },
  {
    company: 'Freelance',
    key: 'freelance',
    current: false,
    descCount: 2,
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
  experience: ExperienceData;
  isLast: boolean;
}

const ExperienceItem = ({ experience, isLast }: ExperienceItemProps) => {
  const controls = useAnimation();
  const t = useTranslations('WorkExperience');

  const role = t(`${experience.key}_role` as Parameters<typeof t>[0]);
  const period = t(`${experience.key}_period` as Parameters<typeof t>[0]);
  const descriptions = Array.from({ length: experience.descCount }, (_, i) =>
    t(`${experience.key}_desc_${i}` as Parameters<typeof t>[0])
  );

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
      <div className="pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">{role}</h3>
          {experience.current && (
            <Badge className="text-xs uppercase bg-primary/10 text-primary border-0 hover:bg-primary/20">
              {t('badge_current')}
            </Badge>
          )}
        </div>

        <p className="text-sm font-medium text-muted-foreground mb-1">
          {experience.company}
        </p>

        <p className="text-xs text-muted-foreground mb-3">{period}</p>

        <ul className="text-muted-foreground text-sm leading-relaxed mb-3 list-disc list-inside space-y-1">
          {descriptions.map((item) => (
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
