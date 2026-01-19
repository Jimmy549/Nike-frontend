import type { Metadata } from 'next';
import { RootProvider } from './RootProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nike Store',
  description: 'Your favorite Nike sneaker store',
  icons: {
    icon: '/icons8-nike-96.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
