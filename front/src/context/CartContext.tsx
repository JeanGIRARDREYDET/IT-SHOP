import { createContext, ReactNode, useContext, useReducer } from 'react';
import { cartReducer, initialCartState } from '../stores/CartStore';
// import {cartReducer, initialCartState} from '../stores/testStore'
import { IProduct } from '../types/product'


const CartContext = createContext(initialCartState);

export const CartConsumer = CartContext.Consumer;
export const CartConsumerHook = () => useContext(CartContext);

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}
export const CartProvider = ({children}: Props) => (
   <CartContext.Provider value={useReducer(cartReducer, initialCartState)}>
       { children }
   </CartContext.Provider>
);

// export class UserInfos {
//   userID: string;
//   role: string;
//   cart: IProduct[]
//   constructor() {
//     this.userID = '';
//     this.role = '';
//     this.cart = [];
//   }
//   getUserID() {
//     return this.userID;
//   }
//   getRole() {
//     return this.role;
//   }
//   getCart() {
//     return this.cart;
//   }
//   setUserID(id: string){
//     this.userID = id
//   }
//   setRole(role: string){
//     this.role = role
//   }
//   addProductToCart(product: IProduct){
//     this.cart.push(product)
//   }
//   removeProductToCart(productID: string) {
//     this.cart = this.cart.filter(product => product._id !== productID)
//   }
// }