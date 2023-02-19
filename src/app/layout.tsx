'use client';

import { Roboto_Mono } from '@next/font/google';
import { Container } from '@mantine/core';
import RootStyleRegistry from './emotion';
import './styles.css';

const roboto = Roboto_Mono({
  weight: '200',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head />
      <body className={roboto.className}>
        <RootStyleRegistry>
          <Container>{children}</Container>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
