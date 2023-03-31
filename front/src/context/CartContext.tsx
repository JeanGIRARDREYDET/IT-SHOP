import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { cartReducer, initialCartState, IAction, IState } from '../stores/CartStore';
// import {cartReducer, initialCartState} from '../stores/testStore'
import { IProduct } from '../types/product'
import { getFromLocalStorage } from '../utils/LocalStorage';

type iCartStoreReducer = { state: IState, action: IAction }


const CartContext = createContext(initialCartState);

export const CartConsumer = CartContext.Consumer;
export const CartConsumerHook = () => useContext(CartContext);

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode
}
// CartProvider is in fact a store: simulating a store thanks to useReducer and useContext + localstorage persistence on dispatch actions 
export const CartProvider = ({children}: Props) => (
  // @ts-ignore
  <CartContext.Provider value={useReducer(cartReducer, initialCartState)} >
    { children }
  </CartContext.Provider>
);

