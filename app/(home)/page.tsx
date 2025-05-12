import CardGrid from '@/components/ui/card-grid';
import Container from '@/components/ui/container';
import { ResumeButton } from '@/components/ui/resume-button';

import { Certification } from '@/components/certification';
import { Work } from '@/components/work';
import { Competition } from '@/components/competition';
import { Graduation } from '@/components/graduation';
import Link from 'next/link';

import { projects } from '@/utils/projects';
import Geo from '@/components/geo';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Container>
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="font-bold text-4xl text-muted-foreground">
              Hey, I'm Lucas Pinheiro.
            </h1>
            <p className="font-bold text-2xl text-foreground">
              A Full-Stack Developer from 🇧🇷 based in{' '}
              <Link
                href={'https://www.google.com/search?q=braganca+paulista"'}
                className="underline"
              >
                Bragança Paulista
              </Link>
              .
            </p>
            <p className="text-muted-foreground">
              Building digital solutions at{' '}
              <Link
                href={'https://www.intranetmall.com.br/br/'}
                className="font-bold underline"
              >
                Intranet Mall
              </Link>
              .
            </p>
          </div>
          <p className="text-muted-foreground">
            I am a full-stack developer{' '}
            <strong className="text-foreground">
              driven by the challenge of solving problems
            </strong>{' '}
            through software engineering. With{' '}
            <strong className="text-foreground">
              expertise spanning both front-end and back-end
            </strong>{' '}
            development, I architect robust solutions that bridge technical
            innovation with real-world user needs. My passion lies in
            transforming abstract concepts into functional applications—whether
            optimizing system performance, enhancing user experiences, or
            automating critical workflows. I thrive in environments where code
            meets creative problem-solving, leveraging modern technologies to
            deliver end-to-end solutions that make a measurable impact.
          </p>
          <ResumeButton />
        </div>
      </Container>
      <CardGrid projects={projects} />
      <Container>
        <section className="w-full space-y-4">
          <Graduation />
          <Work />
          <Certification />
          <Competition />
        </section>

        <section>
          <Geo />
        </section>

        <footer>
          <h3 className="text-muted-foreground font-bold text-3xl mt-24">
            Let's work together!
          </h3>
          <div className="flex flex-col md:flex-row md:items-center my-4 gap-4">
            <p className="text-muted-foreground">
              Interested in working with me? Send me a message at
            </p>

            <Button>
              <Link href={'mailto:lps1704@gmail.com'}>lps1704@gmail.com</Link>
            </Button>
          </div>
        </footer>
      </Container>
    </>
  );
}
