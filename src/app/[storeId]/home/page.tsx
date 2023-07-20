import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import { Params } from '@/types';

const HomePage = async ({ params: { storeId } }: Params) => {
  const products = await getProducts({ isFeatured: true }, storeId);
  const billboard = await getBillboard(
    '9d124324-3fc1-4f9d-ac5f-c3c40902a843',
    storeId
  );

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
