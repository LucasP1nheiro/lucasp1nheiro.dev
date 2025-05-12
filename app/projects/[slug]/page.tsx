import React from 'react';
import { projects } from '@/utils/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LucideArrowUpRight } from 'lucide-react';

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const project = projects.find((item) => item.key === slug);

  if (project === undefined) {
    return notFound();
  }

  return (
    <main className="w-full space-y-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-muted-foreground font-bold text-3xl">
          {project.title}
        </h1>
        <Button asChild variant={'ghost'}>
          <Link href={project.projectUrl}>
            <p>View project</p>
            <LucideArrowUpRight />
          </Link>
        </Button>
      </div>
      <Image
        src={project.banner}
        alt={`Project ${project.title} image`}
        width={384} // Match the intended display width
        height={384} // Match the intended display height
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
