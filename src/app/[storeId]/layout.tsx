import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Params } from '@/types';

export default function MainLayout({
  children,
  params: { storeId },
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  return (
    <>
      <Navbar storeId={storeId} />
      {children}
      <Footer />
    </>
  );
}
