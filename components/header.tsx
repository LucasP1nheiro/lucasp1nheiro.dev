import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Github from './icons/github';
import Linkedin from './icons/linkedin';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Container from './ui/container';

export const Header = () => {
  const socialLinks = [
    {
      href: 'https://github.com/LucasP1nheiro',
      icon: <Github />,
      name: 'github',
    },
    {
      href: 'https://www.linkedin.com/in/lucas-pinheiro-da-silva/',
      icon: <Linkedin />,
      name: 'linkedin',
    },
    {
      href: 'mailto:lps1704@gmail.com',
      icon: <Mail />,
      name: 'email',
    },
  ];
  return (
    <Container>
      <header className="flex mb-12 justify-between">
        {/* <Button size={'icon'} className="p-0"> */}
        <div className="flex items-start gap-4">
          <Link href={'/'}>
            <Avatar className="md:size-16">
              <AvatarImage src={'/me.jpg'} className="object-cover bg-center" />
              <AvatarFallback>LP</AvatarFallback>
            </Avatar>
          </Link>
          {/* </Button> */}
          <div className="space-y-1">
            <h3 className="font-bold text-xl">Lucas Pinheiro</h3>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>

        <ul className="flex gap-2">
          {socialLinks.map((item) => (
            <Button size={'icon'} variant={'outline'}>
              <Link href={item.href}>
                <span className={'sr-only'}>{item.name}</span>
                {item.icon}
              </Link>
            </Button>
          ))}
        </ul>
      </header>
    </Container>
  );
};
