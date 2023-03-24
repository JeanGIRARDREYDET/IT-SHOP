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
  cart: [
    {name: 'coca', brand: 'cola', quantity: 2},
    {name: 'coco', brand: 'lala', quantity: 6},
    {name: 'tomate', brand: 'fifi', quantity: 2}
  ]
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
      // const isProduct = isInCart(action.payload, state)
      console.log('store ADD')
      if(getProductIndex(action.payload, state) !== -1){
          const index = getProductIndex(action.payload, state)
            state.cart[index].quantity += 1
        return {
          ...state
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
      console.log('store REMOVE')
      return {
        ...state,
        cart: [...state.cart.filter(product => product._id !== action.payload._id)]
      }
     default:
     return state;
 }
};