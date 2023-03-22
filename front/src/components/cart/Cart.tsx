import Styles from './Cart.module.css'
import { useContext } from 'react'

type Props = {
  cartProducts: []
}
const Cart = ()=> {
  useContext(CartContext)
 return (
<>
  <h1>Cart</h1>
</>

 )
}
export default Cart