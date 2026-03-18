'use client';

import UTCMinus3Clock from '@/components/utc-minus-3-clock';
import Globe from './ui/globe';
import { useTranslations } from 'next-intl';

const Geo = () => {
  const t = useTranslations('Geo');

  return (
    <div className="flex flex-col justify-between items-center py-4">
      <UTCMinus3Clock />
      <Globe />
      <div className="text-center">
        <p className="max-w-[500px] text-muted-foreground text-sm">
          {t.rich('description', {
            timezone: t('timezone'),
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </div>
    </div>
  );
};

export default Geo;
