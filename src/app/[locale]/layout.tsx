import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import '../../styles/globals.scss';
import { locales } from '@/utils/i18nConfig';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Elisabeth FAUJOUR - Développeuse Web Front-End',
  description:
    'Portfolio de Elisabeth FAUJOUR, développeuse Web Front-end, et réalisé avec amour avec Next.js.',
  keywords:
    'Elisabeth FAUJOUR, FAUJOUR, Portfolio, Développeuse, Développeur, Développeur Web, Front-End, Javascript, Next.js, React, Node.js, Web, Reconversion, React, UX/UI, HTML, CSS, SCSS, Typescript.',
  metadataBase: new URL('https://elisabethfaujour.vercel.app/'),
};

export async function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <div className="container">
          <Header locale={locale} />
          <main className="main">{children}</main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
