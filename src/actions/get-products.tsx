import { Product } from '@/types';
import qs from 'query-string';

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (
  query: Query,
  storeId: string
): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
