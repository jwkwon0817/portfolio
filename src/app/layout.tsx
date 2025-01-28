import type { Metadata } from 'next';
import * as s from './layout.css';

import '~/styles/global.css';

export const metadata: Metadata = {
  title: 'Jeewon Kwon',
  description: 'Sunrin Internet High School Student',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={s.layout}>{children}</body>
    </html>
  );
}
