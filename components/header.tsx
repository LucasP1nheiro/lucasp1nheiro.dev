import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Container from './ui/container';
import { ThemeToggle } from './theme-toggle';
import { LocaleSwitcher } from './locale-switcher';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export const Header = async () => {
  const t = await getTranslations('Header');

  return (
    <Container>
      <header className="flex mb-12 justify-between gap-4">
        <div className="flex items-start gap-4">
          <Link href={'/'}>
            <Avatar className="md:size-20">
              <AvatarImage src={'/me.png'} className="object-cover bg-center" />
              <AvatarFallback>{t('avatar_fallback')}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="space-y-1">
            <h3 className="font-bold text-xl">Lucas Pinheiro da Silva</h3>
            <p className="text-muted-foreground">{t('role')}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </header>
    </Container>
  );
};
