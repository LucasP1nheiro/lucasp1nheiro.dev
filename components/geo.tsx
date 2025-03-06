'use client';

import UTC8Clock from '@/components/utc-8-clock';
import Globe from './ui/globe';


const Geo = () => {
  return (
    <div className="flex flex-col justify-between items-center py-16">
      <UTC8Clock />
      <Globe />
      <div className="text-center">
        <p className="max-w-[500px]">
          Not sure where <strong>Bragança Paulista</strong> is? Here’s a quick
          heads-up—it’s my home! :)
        </p>
      </div>
    </div>
  );
};

export default Geo;
