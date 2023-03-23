import { IProduct, IProductCart } from '../types/product'
import { ICartProduct } from '../types/user'

type IAction = {
  type: string
  payload: IProduct,

}

type IState = {
  cart: IProductCart[]
}

export const initialCartState = {
  cart: []
};

const isInCart = (product: IProduct, state:IState):boolean => {
  const { cart } = state;
  console.log(product)
  return cart.find(product => product._id === product._id )? true: false;
}

const getProductIndex = (product: IProduct, state:IState): number => {
  const { cart } = state;
  return  cart.findIndex(product => product._id === product._id )
}

const getProduct = (product: IProduct, state:IState): number => {
  const { cart } = state;
  return  cart.findIndex(product => product._id === product._id )
}

const productToProductCard = (product: IProduct, quantity: number):IProductCart => {
  return {...product, quantity}
}

export const cartReducer = (state: IState, action: IAction) => {
 switch (action.type) {
     case 'addProduct':
      const isProduct = isInCart(action.payload, state)
      if(isProduct){
          const index = getProductIndex(action.payload, state)
          if(index !== -1) {
            return state.cart[index].quantity++
          }
        return {
          ...state,
          cart: [...state.cart,  ]
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}]
        }
      }
    //  return {
    //      ...state,
    //      cart: [...state.cart, isInCart(action.payload, state)? productToProductCard(action.payload, {...isInCart(action.payload, state), quantity : ) ]
    //  };
     case 'removeProduct':
      return {
        ...state,
        cart: [...state.cart.filter(product => product._id !== action.payload._id)]
      }
     default:
     return state;
 }
};