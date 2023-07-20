import { Color } from '@/types';

const getColors = async (storeId: string): Promise<Color[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`
  );

  return res.json();
};

export default getColors;
