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
    
    {
        cart.length > 0 ? (

    <div className="List-Cart"> 

    <table>

    <thead>
        <tr>
            <th scope="row"></th>
            <th scope="row">Name</th>
            <th scope="row">Description</th>
            <th>Prix</th>
            <th>Quantité</th>
        </tr>
       
    </thead>

    </table>

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


    </div>) : <h2>Votre Panier est vide</h2>
    }

  </div>

</>

 )
}
export default Cart