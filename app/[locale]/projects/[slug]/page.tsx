import React from 'react';
import { projects } from '@/utils/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LucideArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const t = await getTranslations('ProjectPage');

  const project = projects.find((item) => item.key === slug);

  if (project === undefined) {
    return notFound();
  }

  return (
    <main className="w-full space-y-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-muted-foreground font-bold text-3xl">{project.title}</h1>
        <Button asChild variant={'ghost'}>
          <Link href={project.projectUrl}>
            <p>{t('view_project')}</p>
            <LucideArrowUpRight />
          </Link>
        </Button>
      </div>
      <Image
        src={project.banner}
        alt={t('image_alt', { title: project.title })}
        width={384}
        height={384}
        className="w-full h-auto rounded-md object-cover bg-center"
        priority
      />
      <section
        className={`prose prose-li:text-muted-foreground marker:text-foreground prose-p:text-muted-foreground prose-h1:text-foreground prose-strong:text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-a:text-foreground`}
      >
        {project.markdown}
      </section>
    </main>
  );
};

export default ProjectPage;
