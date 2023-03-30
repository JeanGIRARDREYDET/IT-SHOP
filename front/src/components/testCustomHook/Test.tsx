import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { CartConsumerHook } from "../../context/CartContext";
import { IProduct } from "../../types/product"


const Test = () => {
  const [products, setProducts] = useState<IProduct[] | [] >([])
  const [{cart}, dispatch] = CartConsumerHook();

  const remove = () => {
    console.log('remove')
    dispatch({type: 'removeProduct', payload: 1})
  }
  const add = () => {
    console.log('add')
    dispatch({type: 'addProduct', payload: 1})
  }

  useEffect(() => {
    setProducts(products => [...products, ...cart])
  }, [cart])
  return (
    <>
    <h3>TEST cartConsumerHook</h3>
    <div>
      {cart.length > 0 && cart.map((product: { name: string, quantity: string }) => {
        <div>
          <strong>{product.name}</strong>
          <strong>{product.quantity}</strong>
        </div>
      })
      }
      </div>
    <div>remove product quantity : <h1 onClick={remove}>-</h1></div>
    <div>add product quantity : <h1 onClick={add}>+</h1></div>
    </>
  )
}
export default Test