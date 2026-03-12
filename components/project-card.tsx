import { Project } from '@/utils/projects';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.key}`}
      className="rounded-lg bg-secondary/50 hover:bg-secondary dark:bg-secondary/5 text-card-foreground shadow-sm p-4 group dark:hover:bg-secondary/10 transition-all duration-300"
    >
      <div className="relative h-auto aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={project.banner}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="p-6 space-y-2">
        <Badge className="uppercase bg-primary/10 text-primary">
          {project.type}
        </Badge>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </Link>
  );
}
