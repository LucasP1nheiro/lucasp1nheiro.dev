import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="w-full md:py-24 py-8">
        <header className="mb-12">
          <Button asChild variant={'ghost'}>
            <Link href={'/'}>
              <ArrowLeft />
              <p>Back to home</p>
            </Link>
          </Button>
        </header>
        {children}
      </div>
    </Container>
  );
}
