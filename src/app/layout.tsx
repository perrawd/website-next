'use client';

import { Container } from '@mantine/core';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head />
      <body>
        <RootStyleRegistry>
          <Container>
            {children}
          </Container>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
