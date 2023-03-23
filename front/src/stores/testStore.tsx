import { IProduct, IProductCart } from '../types/product'

type IAction = {
  type: string
  payload: IProduct,

}

type IState = {
  cart: IProduct[]
}

export const initialCartState = {
  cart: []
};
const isInCart = (product: IProduct, state:IState):boolean => {
  const { cart } = state;
  console.log(product)
  const p = cart.find(product => product._id === product._id );

  console.log(p)
  return !!product
}

const productToProductCard = (product: IProduct, quantity: number):IProductCart => {
  return {...product, quantity}
}

export const cartReducer = (state: IState, action: IAction) => {
 switch (action.type) {
     case 'addProduct':
      const quantity = isInCart(action.payload, state)
     return {
         ...state,
         cart: [...state.cart, isInCart(action.payload, state)? productToProductCard() ]
     };
     case 'removeProduct':
      return {
        ...state,
        cart: [...state.cart.filter(product => product._id !== action.payload._id)]
      }
     default:
     return state;
 }
};