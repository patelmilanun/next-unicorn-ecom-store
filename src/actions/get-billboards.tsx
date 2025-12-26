import { Billboard } from '@/types';

const getBillboards = async (storeId: string): Promise<Billboard[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`
  );

  return res.json();
};

export default getBillboards;
