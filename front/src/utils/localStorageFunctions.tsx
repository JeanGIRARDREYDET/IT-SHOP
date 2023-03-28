import { useEffect, useState } from "react"
import { IProductCart } from "../types/product"
import { IUser } from "../types/user"

type IPayload = {
  type: string
  payload: any 
}

type ILocal = {
  cart: IProductCart[] | null,
  user: IUser | null
}

// Sauvegarder le panier dans le localStorage


const useLocalStorage = () => {
  const [local, setLocal] = useState<ILocal | null>(null)

  const saveToLocalStorage = (action:IPayload) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(action.type, JSON.stringify(action.payload));
    }
  }
  
  const getFromLocalStorage = (key:string) => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem(key)) 
    }
  }

  useEffect(() => {
    setLocal({cart: getFromLocalStorage('cart'), user: getFromLocalStorage('user')})
  }, [local])
  
  return (
    {
      saveToLocalStorage,
      getFromLocalStorage,
      local
    }
  ) 
}

export default useLocalStorage

