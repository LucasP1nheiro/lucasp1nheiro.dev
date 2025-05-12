import type { Metadata } from 'next';
import { Space_Grotesk as SpaceGrotesk, Architects_Daughter as ArchitectsDaughter } from 'next/font/google';
import './globals.css';


const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
});

const architectsDaughter = ArchitectsDaughter({
  subsets: ['latin'],
  weight: '400',
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
      <body
        className={`${architectsDaughter.className} antialiased overflow-y-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
