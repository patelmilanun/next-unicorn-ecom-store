import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Params } from '@/types';

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}) {
  const { storeId } = await params;
  return (
    <>
      <Navbar storeId={storeId} />
      {children}
      <Footer />
    </>
  );
}
