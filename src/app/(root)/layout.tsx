'use client';

import { redirect, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import useBaseUrl from '@/hooks/use-base-url';

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  const basePath = usePathname();

  const baseUrl = useBaseUrl((state) => state.baseUrl);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (baseUrl) {
    if (basePath === '/') redirect(`${baseUrl.split('/').pop()}/home`);
  }

  return <>{children}</>;
}
