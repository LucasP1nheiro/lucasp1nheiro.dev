import CardGrid from '@/components/ui/card-grid';
import Container from '@/components/ui/container';
import { ResumeButton } from '@/components/ui/resume-button';

import formWizardImage from '@/public/projects/form-wizard-square.png';
import cosmicusImage from '@/public/projects/cosmicus-square.png';
import doutoraAndressaImage from '@/public/projects/andressa-square.png';

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
    </>
  );
}
