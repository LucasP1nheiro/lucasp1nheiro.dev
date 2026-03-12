'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'pt-BR' : 'en';

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleSwitch}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
      aria-label={t('label', { locale: nextLocale })}
    >
      {t(nextLocale as 'en' | 'pt-BR')}
    </button>
  );
}
