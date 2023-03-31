
import { IProductCart } from "../types/product"
import { IUser } from "../types/user"

type IPayload = {
  type: string
  payload: any 
}
type ILocalStorageUser = {
  user: IUser | null
}
type ILocalStorageCart = {
  cart: IProductCart[] | []
}
type ILocalStorage = {
  user: ILocalStorageUser ,
  cart: ILocalStorageCart 
}


// Sauvegarder le panier dans le localStorage


const forceTypeString = (key: string): string => {
  return window.localStorage.getItem(key) === null ? "{}" :window.localStorage.getItem(key) as string
}

const saveToLocalStorage = (action:IPayload) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(action.type, JSON.stringify(action.payload));
    }
  }
  
const getFromLocalStorage = (): ILocalStorage => {
    if (typeof window !== "undefined") {
      return ({
        user: forceTypeString('user').hasOwnProperty('_id') ? JSON.parse(forceTypeString('user')): null,
        cart: forceTypeString('cart').length > 0 ? JSON.parse(forceTypeString('cart')): []
      })
    } else {
      return (
        {
          user: {user: null},
          cart: {cart: []}
        }
      )
    }
  }
  export { saveToLocalStorage, getFromLocalStorage }
