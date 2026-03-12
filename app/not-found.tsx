import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-serif text-primary">404</h1>
          <h2 className="text-4xl font-serif text-secondary-foreground dark:text-secondary">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <Button asChild>
            <Link href="/">
              <Home />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
