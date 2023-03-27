import useLocalStorage from '../hooks/useLocalStorage'
import { IProduct, IProductCart } from '../types/product'
import { IUser } from '../types/user'

type IAction = {
  type: string
  payload: IProduct,

}

type IState = {
  cart: IProductCart[],
  user: IUser
}
export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  RESET_CART = 'RESET_CART',
  SET_USER_SESSION = 'SET_USER_SESSION',
  UNSET_USER_SESSION = 'UNSET_USER_SESSION'
}

const add = (item: IProductCart): IProductCart => {
  return { ...item, quantity: item.quantity + 1 }
}

const remove = (item: IProductCart) => {
  return {...item, quantity: item.quantity - 1 }
}

const isInCart = (payload: IProduct, cart: IProductCart[]) => cart.findIndex(p => p._id === payload._id) !== -1
const indexInCart = (payload: IProduct, cart: IProductCart[]) => cart.findIndex(p => p._id === payload._id)

const updatedProducts = (products: IProductCart[], payload: IProduct, action: string) => {
  if(!isInCart(payload, products)) return [...products, {...payload, quantity: 1}]
  if (action === ActionTypes.ADD_TO_CART){
    return products.map(i => i._id === payload._id ? add(i): i)
  } else if (action === ActionTypes.REMOVE_TO_CART) {
    if(products[indexInCart(payload, products)].quantity - 1 === 0) return products.filter(p => p._id !== payload._id)
    return products.map(i => i._id === payload._id ? remove(i): i)
  } else{
    return []
  }

  // useLocalStorage here ! 
  // setProducts(updatedProducts);
  // saveProductsToLocalStorage(updatedProducts);
}

export const initialCartState = {
  cart: [],
  user: {}
};

export const cartReducer = (state: IState, action: IAction) => {
    // Similar to useState but first arg is key to the value in local storage.
  // const [name, setName] = useLocalStorage<string>("name", "Bob");
  // const [storedValue, setValue] = useLocalStorage<>()
 switch (action.type) {
     case ActionTypes.ADD_TO_CART:
        return {
          ...state,
          cart: [...updatedProducts(state.cart, action.payload, action.type)]
        };
     case ActionTypes.REMOVE_TO_CART:
      return {
        ...state,
        cart: [...updatedProducts(state.cart, action.payload, action.type)]
      }
      case ActionTypes.RESET_CART:
        return {
          ...state,
          cart: []
        }
      case ActionTypes.SET_USER_SESSION:
        console.log(action.payload)
        return {
          ...state,
          user : {...state.user, ...action.payload}
        }
      case ActionTypes.UNSET_USER_SESSION:
        return {
          ...state,
          user: {}
        }
     default:
     return state;
 }
};