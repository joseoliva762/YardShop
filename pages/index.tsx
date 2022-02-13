import type { NextPage } from 'next'
import Head from 'next/head'

import ProductCard from '@components/ProductCard';
import Products from '@containers/Products';
import useGetProducts from '@hooks/useGetProducts';
import { Product } from '@models/cart.model';

const API = process.env.NEXT_PUBLIC_PRODUCTS_API || '';

const Home: NextPage = () => {
  const products = useGetProducts(API);

  return (
    <>
      <Head>
        <title>
          YardShop - Home
        </title>
      </Head>
      <Products>
        { products.map((product: Product) => (
            <ProductCard product={product} key={`product-${product.id}`} />
          )
        )}
      </Products>
    </>
  );
}

export default Home
