import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getTranslations('ProjectLayout');

  return (
    <Container>
      <div className="w-full md:py-24 py-8">
        <header className="mb-12 flex items-center justify-between">
          <Button asChild variant={'ghost'}>
            <Link href={'/'}>
              <ArrowLeft />
              <p>{t('back_home')}</p>
            </Link>
          </Button>
          <ThemeToggle />
        </header>
        {children}
      </div>
    </Container>
  );
}
