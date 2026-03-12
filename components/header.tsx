import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Container from './ui/container';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  return (
    <Container>
      <header className="flex mb-12 justify-between gap-4">
        {/* <Button size={'icon'} className="p-0"> */}
        <div className="flex items-start gap-4">
          <Link href={'/'}>
            <Avatar className="md:size-20">
              <AvatarImage src={'/me.png'} className="object-cover bg-center" />
              <AvatarFallback>LP</AvatarFallback>
            </Avatar>
          </Link>
          {/* </Button> */}
          <div className="space-y-1">
            <h3 className="font-bold text-xl">Lucas Pinheiro da Silva</h3>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>

        <ThemeToggle />
      </header>
    </Container>
  );
};
