import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { HeaderContextProvider } from '@/context/provider';
import NavBar from '@/components/navBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeaderContextProvider>
        <body className={inter.className}>
        <div className="flex w-full items-center justify-center">
        <NavBar />
      </div>
          {children}</body>
      </HeaderContextProvider>
    </html>
  );
}
