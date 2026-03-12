'use client';

import UTCMinus3Clock from '@/components/utc-minus-3-clock';
import Globe from './ui/globe';

const Geo = () => {
  return (
    <div className="flex flex-col justify-between items-center py-4">
      <UTCMinus3Clock />
      <Globe />
      <div className="text-center">
        <p className="max-w-[500px] text-muted-foreground text-sm">
          I operate in the <strong>UTC-3 timezone</strong> (Brasília Time),
          located in Bragança Paulista, São Paulo, Brazil.
        </p>
      </div>
    </div>
  );
};

export default Geo;
