import type { Metadata, Viewport } from 'next';
import * as s from './layout.css';

import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/global.css';
export const metadata: Metadata = {
  title: 'Jeewon Kwon',
  description: 'Sunrin Internet High School Student',
  openGraph: {
    title: 'Jeewon Kwon',
    description: 'Sunrin Internet High School Student',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.jwkwon0817.me',
    siteName: 'Jeewon Kwon',
    images: [
      {
        url: 'https://www.jwkwon0817.me/_next/image?url=%2Fassets%2Fprofile.png&w=256&q=75', // OG 이미지 경로
        alt: 'Jeewon Kwon',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={s.layout}>{children}</body>
      <SpeedInsights />
    </html>
  );
}
