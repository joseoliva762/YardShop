import CartItem from '@components/CartItem';
import AppContext from '@contexts/AppContext';
import { Product } from '@models/cart.model';
import { StateContext } from '@models/state.model';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react';

const Home: NextPage = () => {
    const { state } = useContext<StateContext>(AppContext);
    const { cart } = state;

  return (
    <>
      <Head>
        <title>
          YardShop - Checkout
        </title>
      </Head>
      
      <div className="grid h-screen place-content-center w-full">
			<div className="grid grid-rows-shop-a1a w-72">
				<h1 className="font-bold mb-10 text-lg">My order</h1>
				<div className="flex flex-col">
					<div className="bg-shop-text-input-field grid grid-cols-shop-a1 gap-4 items-center mb-10 p-6 rounded-lg">
						<p className='flex flex-col'>
							<span className='font-bold text-md' >03.25.21</span>
							<span className='text-sm text-shop-very-light-pink' >{cart.length} articles</span>
						</p>
						<p className='font-bold text-right'>${cart.reduce((acc, el) => acc + el.price, 0)}.00</p>
					</div>
				</div>
                { cart.map((product: Product) => <CartItem product={product} key={`checkout-${product.id}`} />)}
			</div>
		</div>
    </>
  );
}

export default Home
