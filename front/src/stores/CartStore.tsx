import { IProduct } from '../types/product'

type IAction = {
  type: string
  payload: IProduct | string,

}

type IState = {
  cart: IProduct[]
}

export const initialCartState = {
  cart: []
};

export const cartReducer = (state: IState, action: IAction) => {
 switch (action.type) {
     case 'addProduct':
     return {
         ...state,
         cart: [...state.cart, action.payload]
     };
     case 'removeProduct':
      return {
        ...state,
        cart: [...state.cart.filter(product => product._id !== action.payload)]
      }
     default:
     return state;
 }
};