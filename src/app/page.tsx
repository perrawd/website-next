'use client';

import { ActionIcon } from '@mantine/core';
import {
  IconBrandLinkedin, IconMail, IconPhone, IconBrandGithub,
} from '@tabler/icons-react';

export default function Page() {
  return (
    <div>
      <h1>Per Rawdin</h1>
      <div style={{ display: 'flex' }}>
        <ActionIcon variant="outline" size="lg" style={{ marginRight: '7px' }} aria-label="GitHub">
          <IconBrandGithub />
        </ActionIcon>
        <ActionIcon variant="outline" size="lg" style={{ marginRight: '7px' }} aria-label="LinkedIn" on>
          <IconBrandLinkedin />
        </ActionIcon>
        <ActionIcon variant="outline" size="lg" style={{ marginRight: '7px' }} aria-label="E-mail">
          <IconMail />
        </ActionIcon>
        <ActionIcon variant="outline" size="lg" style={{ marginRight: '7px' }} aria-label="Phone">
          <IconPhone />
        </ActionIcon>
      </div>
    </div>
  );
}
