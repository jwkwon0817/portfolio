import type { Metadata } from 'next';

import '~/styles/global.css';

export const metadata: Metadata = {
  title: 'Jeewon Kwon',
  description: 'Sunrin Internet High School Student',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
