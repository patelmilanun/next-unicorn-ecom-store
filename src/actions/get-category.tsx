import { Category } from '@/types';

const getCategory = async (id: string, storeId: string): Promise<Category> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories/${id}`
  );

  return res.json();
};

export default getCategory;
