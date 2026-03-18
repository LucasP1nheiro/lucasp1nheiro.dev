import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Home } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'NotFound' });

  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-serif text-primary">404</h1>
          <h2 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">{t('description')}</p>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <Button asChild>
            <Link href="/">
              <Home />
              {t('go_home')}
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
