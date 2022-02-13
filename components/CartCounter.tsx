import { useContext } from "react";
import Image from "next/image";
import shoppingCartIcon from 'public/icons/shoppingCart.svg'
import AppContext from "@contexts/AppContext";
import { StateContext } from "@models/state.model";

const Bubble = ({ count }: { count: number}) => {
    return (
        <div className="absolute bg-shop-hospital-green grid h-5 p-2 place-content-center rounded-full -top-3 -right-3">
            <p className="font-bold text-xs">{count}</p>
        </div>
    );
}

export default function CartCounter () {
    const { state, toggleOrder } = useContext<StateContext>(AppContext);
    const { cart } = state;

    return (
        <>
            <div 
                className="gird place-content-center relative hover:cursor-pointer"
                onClick={() => toggleOrder()}>
                <figure className="h-6 w-6">
                    <Image src={shoppingCartIcon} alt="Shopping Cart" />
                </figure>
                { cart.length ? <Bubble count={cart.length} /> : null }
            </div>
        </>
    );
}