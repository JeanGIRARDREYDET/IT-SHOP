import Style from './Cart.module.css'
import { useContext,useEffect,useState } from 'react'
import { CartConsumerHook } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';
import Button from '@mui/material/Button';
import { IProductCart } from '../../types/product';
import { ActionTypes } from '../../stores/CartStore';
import { Navigate, useNavigate } from 'react-router';

type Props = {
  cartProducts: []
}
const Cart = ()=> {
  const [{cart}, dispatch] = CartConsumerHook();
  const navigate = useNavigate();
  const [prixTotal, changePrix] = useState(0)
  const [articles_number, setArticles_number] = useState(0)

  const total = cart.reduce((acc: number , c: IProductCart) => acc+ (c.price * c.quantity) , 0 )
  const nbArticles = cart.reduce((acc: number, c: IProductCart) => acc + c. quantity, 0 )
  const onCheckout = () => {
    navigate('/checkout')
  }
  useEffect( () => {
    setArticles_number(nbArticles)
    changePrix(total);
  }, [cart])
  return (
    <>
  <div className="Cart"> 

    <h1>Cart </h1>
    
    {
        cart && cart.length > 0 ? (

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

      {  cart.map((p:IProductCart, i: number) => (

        <div> 

            <CartItem product={p} key={p._id? p._id + i: i} />



        </div>




      ))



      }

      {
        prixTotal > 0 ? (

        <div>
          
          <h2 className={Style.total}> Total: { prixTotal.toFixed(2) } € </h2>
          <h3>produits différents : { cart.length }</h3>
          <p>Nombre d'articles total : { articles_number } </p>
          <button className={Style.ButtonClean} onClick={() => dispatch({type: ActionTypes.RESET_CART})}> Vider le panier </button>
          <button className={Style.ButtonComandez} onClick={onCheckout}> Commandez </button>

          </div>

         ) : ""

      }


    </div>) : <h2 className={Style.Titrevide}>Votre Panier est vide !</h2>
    }

  </div>

</>

 )
}
export default Cart