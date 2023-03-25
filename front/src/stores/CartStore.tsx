import useLocalStorage from '../hooks/useLocalStorage'
import { IProduct, IProductCart } from '../types/product'

type IAction = {
  type: string
  payload: IProduct,

}

type IState = {
  cart: IProductCart[]
}
enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  RESET_CART = 'RESET_CART'
}

const add = (item: IProductCart): IProductCart => {
  console.log(item)
  return { ...item, quantity: item.quantity + 1 }
}

const remove = (item: IProductCart) => {
  if(item.quantity - 1 === 0) return {}
  return {...item, quantity: item.quantity - 1 }
}
// Utils functions :

const updatedProducts = (products: IProductCart[], payload: IProduct, action: string) => {
  if(products.findIndex(p => p._id === payload._id) !== -1 ){
    return products.map(
      item => {
        if(item._id === payload._id) {
          return action === ActionTypes.ADD_TO_CART ? add(item): remove(item) 
        }
      }).filter((i) => Object.keys(i).length > 0 ? i : false)
  } else {
    return [...products, {...payload, quantity: 1}]
  }

  // useLocalStorage here ! 
  // setProducts(updatedProducts);
  // saveProductsToLocalStorage(updatedProducts);
}

export const initialCartState = {
  cart: []
};

export const cartReducer = (state: IState, action: IAction) => {
    // Similar to useState but first arg is key to the value in local storage.
  // const [name, setName] = useLocalStorage<string>("name", "Bob");
  // const [storedValue, setValue] = useLocalStorage<>()
 switch (action.type) {
     case ActionTypes.ADD_TO_CART:
      console.log("In ADD_PRODUCT")
        return {
          ...state,
          cart: [...updatedProducts(state.cart, action.payload, action.type)] //cart[...state.cart, {...action.payload, quantity: 1 }]
        };
      // } else {
      //   console.log('on more item already in')
      //   return {
      //     ...state,
      //     cart: [...state.cart.map(cartItem => cartItem._id === action.payload._id? cartItem.quantity += 1: cartItem )] // [...state.cart, {...action.payload, quantity: cart[cart.findIndex(i => i._id === action.payload._id)].quantity += 1 }]
      // };
      // }
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
     default:
     return state;
 }
};