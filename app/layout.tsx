import type { Metadata } from 'next';
import { Inter, Instrument_Serif as InstrumentSerif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
});

const instrumentSerif = InstrumentSerif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Lucas Pinheiro | Portfolio',
  description: "Lucas Pinheiro's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${instrumentSerif.variable} antialiased overflow-y-scroll`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
