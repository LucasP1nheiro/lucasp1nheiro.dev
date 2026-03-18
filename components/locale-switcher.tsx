'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (target: 'en' | 'pt-BR') => {
    if (target !== locale) router.replace(pathname, { locale: target });
  };

  return (
    <div className="flex items-center gap-2 text-2xl leading-none">
      <button
        onClick={() => switchTo('en')}
        aria-label={t('label', { locale: 'en' })}
        className={`transition-opacity hover:opacity-70 ${locale !== 'en' ? 'opacity-20' : ''}`}
      >
        🇺🇸
      </button>
      <span className="text-sm text-muted-foreground">|</span>
      <button
        onClick={() => switchTo('pt-BR')}
        aria-label={t('label', { locale: 'pt-BR' })}
        className={`transition-opacity hover:opacity-70 ${locale !== 'pt-BR' ? 'opacity-20' : ''}`}
      >
        🇧🇷
      </button>
    </div>
  );
}
