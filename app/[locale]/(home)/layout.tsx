import { Header } from '@/components/header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full md:py-24 py-8">
      <Header />
      {children}
    </div>
  );
}
