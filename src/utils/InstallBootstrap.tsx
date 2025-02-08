'use client';

import { useEffect } from 'react';

export default function InstallBootstrap() {
  useEffect(() => {
    // @ts-expect-error Bootstrap does not have TypeScript support for dynamic import
    import('bootstrap/dist/js/bootstrap.bundle.js');
  }, []);

  return null;
}
