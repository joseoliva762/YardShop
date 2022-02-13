import { useContext } from 'react';
import Link from 'next/link';
import Image from "next/image";

import Navbar from "@containers/Navbar";
import menuIcon from '@icons/menu.svg';
import yardLogo from '@logos/logo.svg';
import Cart from "@containers/Cart";
import CartCounter from "@components/CartCounter";
import HeaderMenu from "@components/HeaderMenu";
import NavButton from "@components/NavButton";
import AppContext from '@contexts/AppContext';
import { StateContext } from '@models/state.model';

export default function Header () {
    const  { state, toggleMenu } = useContext<StateContext>(AppContext);
    

    return (
        <>
            <header className="h-16 bg-shop-white border-b w-full border-shop-very-light-pink py-0 px-6 flex items-center justify-between sticky top-0 z-10">                
                <figure className="grid h-6 place-content-cente w-6 hover:cursor-pointer sm:hidden">
                    <Image src={menuIcon} alt='Menu' />
                </figure>
                <section className="flex gap-3 items-center justify-start">
                    <Link href={'/'} passHref>
                        <figure className="gird h-6 place-content-center sm:hidden md:grid hover:cursor-pointer">
                            <Image className="" src={yardLogo} alt="Yard Sales"/>
                        </figure>
                    </Link>
                    <section className="hidden sm:grid sm:h-full">
                        <Navbar>
                            <NavButton value='All' />
                            <NavButton value='Clothes' />
                            <NavButton value='Electronics' />
                            <NavButton value='Furnitures' />
                            <NavButton value='Toys' />
                            <NavButton value='Others' />
                        </Navbar>
                    </section>
                </section>
                <section className="flex gap-4 items-center justify-center">
                    <p 
                        className="hidden text-shop-very-light-pink hover:cursor-pointer sm:flex"
                        onClick={() => toggleMenu()}>
                        example@test.com
                    </p>
                    <CartCounter />
                </section>
                { state.menuIsOpen && <HeaderMenu /> }
            </header>
            { state.orderIsOpen && <Cart /> }
        </>
    );
}