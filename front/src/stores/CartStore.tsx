import { IProduct, IProductCart } from '../types/product'

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
const isInCart = (product: IProduct, cart:IProductCart):boolean => {
  return true
}

const productToProductCard = (product: IProduct, quantity: number):IProductCart => {
  return {...product, quantity}
}

export const cartReducer = (state: IState, action: IAction) => {
 switch (action.type) {
     case 'addProduct':
     return {
         ...state,
         cart: [...state.cart, state.cart.find(prod => prod._id === action.payload._id) ]
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