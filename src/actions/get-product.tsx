import { Product } from '@/types';

const getProduct = async (id: string, storeId: string): Promise<Product> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products/${id}`
  );

  return res.json();
};

export default getProduct;
