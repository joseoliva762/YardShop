import Image from "next/image";
import addToCartIcon from '@icons/addToCart.svg';
import addedToCartIcon from '@icons/addedToCart.svg';
import { Product } from "@models/cart.model";
import { useContext } from "react";
import { StateContext } from "@models/state.model";
import AppContext from "@contexts/AppContext";

interface ProductCardProps {
    product: Product
}

export default function ProductCard ({ product }: ProductCardProps) {
    const { images, title, price } = product;
    const { state, addToCart } = useContext<StateContext>(AppContext);
    return (
        <>
            <div className="flex flex-col gap-3 w-36 sm:w-60">
                <figure className="h-36 relative w-36 sm:h-60 sm:w-60">
                    <img 
                        className="rounded-3xl object-cover h-full w-full" 
                        src={ images[0] } 
                        alt={title}
                    />
                </figure>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-bold text-base text-shop-black">${price},00</p>
                        <p className="text-sm text-shop-very-light-pink">{title}</p>
                    </div>
                    <figure className="h-9 w-9 hover:cursor-pointer" onClick={() => addToCart(product)}>
                        <Image className="h-full w-full" src={state.cart.includes(product) ? addedToCartIcon : addToCartIcon} alt="Add" />
                    </figure>
                </div>
            </div>
        </>
    );
}