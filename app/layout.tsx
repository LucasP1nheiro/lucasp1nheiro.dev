import type { Metadata } from 'next';
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import './globals.css';
import Container from '@/components/ui/container';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lucas Pinheiro | Portfolio',
  description: "Lucas Pinheiro's portfolio",
  icons: {
    icon: '/me.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider attribute={'class'} defaultTheme="dark">
          {/* <Container> */}
          <div className="w-full md:py-24 py-8">
            <Header />
            {children}
          </div>
          {/* </Container> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
