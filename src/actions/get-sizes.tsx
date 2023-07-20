import { Size } from '@/types';

const getSizes = async (storeId: string): Promise<Size[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`
  );

  return res.json();
};

export default getSizes;
