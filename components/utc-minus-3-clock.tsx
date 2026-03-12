'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface UTCMinus3ClockProps {
  className?: string;
}

const UTCMinus3Clock = ({ className }: UTCMinus3ClockProps) => {
  const [time, setTime] = useState<Date | null>(null);
  const t = useTranslations('UTCMinus3Clock');
  const locale = useLocale();

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (time === null) {
    return (
      <div className={className}>
        <p className="text-xs">{t('loading')}</p>
      </div>
    );
  }

  const formattedTime = new Intl.DateTimeFormat(locale, {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time);

  return (
    <div className={className}>
      <div className="flex items-center text-xs space-x-2">
        <p className="font-semibold">UTC-3</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default UTCMinus3Clock;
