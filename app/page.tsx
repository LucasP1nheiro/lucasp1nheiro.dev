import CardGrid from '@/components/ui/card-grid';
import Container from '@/components/ui/container';
import { ResumeButton } from '@/components/ui/resume-button';

import formWizardImage from '@/public/projects/form-wizard-square.png';
import cosmicusImage from '@/public/projects/cosmicus-square.png';
import doutoraAndressaImage from '@/public/projects/andressa-square.png';
import { Certification } from '@/components/certification';
import { Work } from '@/components/work';
import { Competition } from '@/components/competition';
import { Graduation } from '@/components/graduation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const firstProjects = [
    {
      title: 'Cosmicus',
      imageUrl: cosmicusImage.src,
      description:
        'Interactive space education platform with 3D celestial visualizations.',
      stack: ['Next.js', 'React.js', 'Supabase'],
      href: '/projects/cosmicus',
    },
    {
      title: 'Form Wizard',
      imageUrl: formWizardImage.src,
      description:
        'A configurable form builder with real-time preview and validation system.',
      stack: ['Next.js', 'React.js', 'Supabase'],
      href: '/projects/form-wizard',
    },
    {
      title: 'Doutora Andressa',
      imageUrl: doutoraAndressaImage.src,
      description:
        'Telemedicine solution with appointment scheduling and video consultations.',
      stack: ['Next.js', 'React.js', 'Tailwind'],
      href: '/projects/doutora-andressa',
    },
  ];

  return (
    <>
      <Container>
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl text-muted-foreground">
              Hey, I'm Lucas Pinheiro.
            </h1>
            <h2 className="font-bold text-2xl">
              A Full-Stack Developer from 🇧🇷 based in{' '}
              <span className="underline">Bragança Paulista</span>.
            </h2>
          </div>
          <p className="text-muted-foreground">
            I am a full-stack developer{' '}
            <strong className="text-accent-foreground">
              driven by the challenge of solving problems
            </strong>{' '}
            through software engineering. With expertise spanning both front-end
            and back-end development, I architect robust solutions that bridge
            technical innovation with real-world user needs. My passion lies in
            transforming abstract concepts into functional applications—whether
            optimizing system performance, enhancing user experiences, or
            automating critical workflows. I thrive in environments where code
            meets creative problem-solving, leveraging modern technologies to
            deliver end-to-end solutions that make a measurable impact.
          </p>
          <ResumeButton />
        </div>
      </Container>
      <CardGrid projects={firstProjects} />
      <Container>
        <section className="w-full space-y-4">
          <Graduation />
          <Work />
          <Certification />
          <Competition />
        </section>

        <h3 className="text-muted-foreground font-bold text-3xl mt-24">
          Let's work together!
        </h3>
        <div className="flex flex-col md:flex-row items-center my-4 gap-4">
          <p className="text-muted-foreground">
            Interested in working with me? Send me a message at
          </p>

          <Link
            className="relative inline-flex overflow-hidden rounded-xl p-px"
            href={'mailto:lps1704@gmail.com'}
          >
            <span
              className={cn(
                'absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]',
                'dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]',
              )}
            />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-500 backdrop-blur-3xl dark:bg-neutral-950 dark:text-neutral-100">
              lps1704@gmail.com
            </span>
          </Link>
        </div>
      </Container>
    </>
  );
}
