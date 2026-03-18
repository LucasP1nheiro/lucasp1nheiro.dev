import Container from '@/components/ui/container';
import { Certification } from '@/components/certification';
import { Competition } from '@/components/competition';
import { Graduation } from '@/components/graduation';
import Geo from '@/components/geo';
import { Button } from '@/components/ui/button';
import { Mail, BookCheck, Send } from 'lucide-react';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import { WorkExperience } from '@/components/work-experience';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import NextLink from 'next/link';

export default async function Home() {
  const t = await getTranslations('HomePage');

  const socialLinks = [
    {
      href: 'https://github.com/LucasP1nheiro',
      icon: <Github />,
      name: 'github',
    },
    {
      href: 'https://www.linkedin.com/in/lucas-pinheiro-da-silva/',
      icon: <Linkedin />,
      name: 'linkedin',
    },
    {
      href: 'mailto:lucasp1nheirodeveloper@gmail.com',
      icon: <Mail className="dark:text-primary-foreground text-primary" />,
      name: 'email',
    },
  ];

  return (
    <>
      <Container>
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-6xl text-primary font-serif">{t('greeting')}</h1>
            <p className="text-3xl text-secondary-foreground dark:text-secondary font-serif">
              {t('tagline')}{' '}
              <Link
                href={'https://www.google.com/search?q=braganca+paulista"'}
                className="underline"
              >
                {t('tagline_location')}
              </Link>
              .
            </p>
            <p className="text-muted-foreground">
              {t('working_at')}{' '}
              <Link
                href={'https://www.intranetmall.com.br/br/'}
                className="font-bold underline"
              >
                Intranet Mall
              </Link>
              .
            </p>
          </div>

          <div className="flex sm:items-center gap-4 flex-col sm:flex-row">
            <Button asChild>
              <NextLink href={'/resume.pdf'}>
                <BookCheck />
                {t('resume_button')}
              </NextLink>
            </Button>
            <ul className="flex gap-2 justify-center">
              {socialLinks.map((item) => (
                <Button variant={'ghost'} key={item.name} className="group">
                  <Link href={item.href}>
                    <span className={'sr-only'}>{item.name}</span>
                    {item.icon}
                  </Link>
                </Button>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <section className="w-full space-y-4 mt-24">
          <h2 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            {t('section_experience')}
          </h2>
          <WorkExperience />
        </section>
      </Container>

      {/* <Container>
        <section className="w-full space-y-4 mt-24">
          <h2 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            {t('section_work')}
          </h2>
        </section>
      </Container> */}

      <Container>
        <section className="w-full space-y-4 mt-24">
          <h2 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            {t('section_education')}
          </h2>
          <Graduation />
          <Certification />
          <Competition />
        </section>

        <section className="mt-24">
          <h2 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            {t('section_location')}
          </h2>
          <Geo />
        </section>

        <footer className="mt-36 text-center">
          <h3 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            {t('footer_cta')}
          </h3>
          <div className="flex flex-col md:items-center my-4 gap-4">
            <p className="text-muted-foreground text-sm">{t('footer_message')}</p>

            <Button asChild>
              <Link href={'mailto:lucasp1nheirodeveloper@gmail.com'}>
                <Send />
                lucasp1nheirodeveloper@gmail.com
              </Link>
            </Button>
          </div>
        </footer>
      </Container>
    </>
  );
}
