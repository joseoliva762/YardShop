import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@contexts/AppContext';
import iconClose from 'public/icons/icon_close.png';
import { Product } from '@models/cart.model';

interface OrderItemProps {
    product: Product
}

const CartItem = ({ product }: OrderItemProps) => {
	const { title, price, images } = product;
	const { removeFromCart } = useContext(AppContext);

	return (
		<div className="items-center grid gap-4 grid-cols-shop-card-grid mb-6">
			<figure className='m-0 hover:cursor-default'>
				<img className='rounded-2xl h-16 object-cover w-16' src={images[0] || ''} alt="bike" />
			</figure>
			<p className='text-shop-very-light-pink hover:cursor-default'>{ title }</p>
			<p className='text-base font-bold hover:cursor-default'>${ price },00</p>
			<Image 
				className='hover:cursor-pointer'
				onClick={() => removeFromCart(product)} 
				src={iconClose || ''} 
				alt="close" 
			/>
		</div>
	);
}

export default CartItem;