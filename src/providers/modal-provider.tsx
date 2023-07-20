'use client';

import { useEffect, useState } from 'react';

import PreviewModal from '@/components/preview-modal';
import StoreModal from '@/components/store-modal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
      <StoreModal />
    </>
  );
};

export default ModalProvider;
