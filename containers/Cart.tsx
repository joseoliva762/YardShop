import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "@components/CartItem";
import AppContext from "@contexts/AppContext";
import { StateContext } from "@models/state.model";
import backIcon from 'public/icons/flechita.svg';

const Cart = () => {
  const { state, toggleOrder } = useContext<StateContext>(AppContext);
  const { cart } = state; 

  return (
    <>
        <aside className="bg-shop-white border border-shop-very-light-pink bottom-0 fixed flex items-start justify-center overflow-hidden p-6 right-0 top-16 w-full z-10 sm:w-96 sm:rounded">
            <div className="flex flex-col items-start gap-1 h-full justify-start overflow-hidden w-full">

                <div className="flex gap-2 h-full items-center justify-start max-h-16 w-full">
                  <figure 
                    className="cursor-pointer grid place-content-center h-8 w-8 rounded-lg hover:bg-shop-text-input-field"
                    onClick={() => toggleOrder()}>
                    <Image className="h-full w-full rotate-180" src={backIcon} alt="Back" />
                  </figure>
                  <p className="cursor-default font-bold">My orders</p>
                </div>

                <div className="h-full overflow-y-scroll scroll-smooth w-full">
                  { cart.map(item => <CartItem product={item} key={`orderItem-${item.id}`} />)}
                </div>

                <div className="items-center bg-shop-text-input-field flex gap-1 h-full justify-between max-h-16 px-6 py-1 rounded w-full">
                    <p className="cursor-default font-bold">Total</p>
                    <p className="cursor-default font-bold">
                      ${cart.reduce((acc, el) => acc + el.price, 0)}.00
                    </p>    
                </div>
                <div className="items-center bg-shop-white flex gap-1 h-full justify-between max-h-16 py-1 rounded w-full">
                  <Link href={'/checkout'}>
                    <div className="bg-shop-hospital-green font-bold grid h-full place-content-center rounded text-lg text-shop-white w-full hover:opacity-90 hover:cursor-pointer">
                      checkout
                    </div>
                  </Link>
                </div>

            </div>
        </aside>
    </>
  );
}

export default Cart
