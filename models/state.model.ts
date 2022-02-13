import { Product, CartModifiedFunc } from '@models/cart.model';

export type VoidFunc = () => void;

export interface State {
    cart: Product[],
    orderIsOpen: boolean,
    menuIsOpen: boolean
}

export interface StateContext {
    state: State;
    addToCart: CartModifiedFunc
    removeFromCart: CartModifiedFunc;
    toggleOrder: VoidFunc
    toggleMenu: VoidFunc
}