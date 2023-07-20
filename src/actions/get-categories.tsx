import { Category } from '@/types';

const getCategories = async (storeId: string): Promise<Category[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`
  );

  return res.json();
};

export default getCategories;
