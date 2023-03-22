import { createContext } from 'react';
import { IProduct } from '../types/product'

export class UserInfos {
  userID: string;
  role: string;
  cart: IProduct[]
  constructor() {
    this.userID = '';
    this.role = '';
    this.cart = [];
  }
  getUserID() {
    return this.userID;
  }
  getRole() {
    return this.role;
  }
  getCart() {
    return this.cart;
  }
  setUserID(id: string){
    this.userID = id
  }
  setRole(role: string){
    this.role = role
  }
  addProductToCart(product: IProduct){
    this.cart.push(product)
  }
  removeProductToCart(productID: string) {
    this.cart = this.cart.filter(product => product._id !== productID)
  }

}
export const CartContext = createContext(UserInfos);
