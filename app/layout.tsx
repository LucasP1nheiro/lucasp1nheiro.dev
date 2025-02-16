import type { Metadata } from 'next';
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import './globals.css';


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
      <body
        className={`${spaceGrotesk.className} antialiased overflow-y-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
