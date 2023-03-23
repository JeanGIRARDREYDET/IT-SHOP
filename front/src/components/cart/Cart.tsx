import Style from './Cart.module.css'
import { useContext,useEffect,useState } from 'react'
import { CartConsumerHook } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';

type Props = {
  cartProducts: []
}
const Cart = ()=> {
  const [{cart}, dispatch] = CartConsumerHook();

  const [prixTotal,changePrix] = useState(0)

  const total = cart.reduce((acc,c)=>acc+ c.price,0
    
    )
  


    useEffect(()=>{
      changePrix(total);
    }, [])
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

      {
        prixTotal > 0 ?

       <h2 className={Style.total}> Total: {prixTotal.toFixed(2)} € </h2>

       : ""

      }


    </div>

  </div>

</>

 )
}
export default Cart