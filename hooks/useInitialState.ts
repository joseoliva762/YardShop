import { Product } from "@models/cart.model";
import { useState } from "react";

const initialState = {
  cart: [] as Product[],
  orderIsOpen: false,
  menuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [ ...state.cart, payload ],
    });
  };

  const removeFromCart = (payload: Product) => {
    setState({
      ...state,
      cart: state.cart
        .filter((items: Product) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
  };
};

export default useInitialState;