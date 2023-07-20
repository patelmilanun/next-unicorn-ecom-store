import { Billboard } from '@/types';

const getBillboard = async (
  id: string,
  storeId: string
): Promise<Billboard> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards/${id}`
  );

  return res.json();
};

export default getBillboard;
