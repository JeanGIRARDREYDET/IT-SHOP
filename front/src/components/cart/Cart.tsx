import Styles from './Cart.module.css'
import { useContext } from 'react'
import { CartConsumerHook } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';

type Props = {
  cartProducts: []
}
const Cart = ()=> {
  const [{cart}, dispatch] = CartConsumerHook();


 return (
<>
  <div className="Cart"> 

    <h1>Cart </h1>
    
    <div className="List-Cart"> 


      {  cart.map((p,i)=>(

        <div> 

            <CartItem product={p} key={i} />

        </div>




      ))



      }
    </div>

  </div>

</>

 )
}
export default Cart