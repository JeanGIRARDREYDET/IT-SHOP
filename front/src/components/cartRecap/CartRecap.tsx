import { Box, Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react';
import { IProductCart } from '../../types/product';
import { CartConsumerHook } from '../../context/CartContext'
import Styles from './CartRecap.module.css'
import { useNavigate } from 'react-router-dom';
import { IPaiement } from '../../types/user';
type Props = {
  paiementInfos:IPaiement
}

const CartRecap = ({paiementInfos}: Props) => {
  const navigate = useNavigate()
  // @ts-ignore
  const[{cart, user},] = CartConsumerHook();
  const [productCart, setproductCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isValidCheckout, setIsValidCheckout] = useState(false)

  const price:number = cart.reduce((acc: number, p:IProductCart) => acc + (p.price * p.quantity), 0)
  const isValid = () => user.delivery_address && cart && paiementInfos
  const handleCheckout = () => {
    const checkout = {
      cart,
      delivery: user.delivery_address,
      paiement: paiementInfos
    }
    if(user.delivery_address && cart && paiementInfos) {

      // setIsValidCheckout(true)

      console.log(checkout)
    }
    else {
      console.log(checkout)
      // setIsValidCheckout(false)
    }

    
  }
  useEffect(() => {
    if(isValid()){
      setIsValidCheckout(true)
    }
    else{
      setIsValidCheckout(false)
    }
  setTotalPrice(price)

  }, [cart, paiementInfos, user, isValidCheckout])
  
  return (
    <Box className={Styles.container}>
        <h2>Commande</h2>
        <h2>{user.delivery_address? user.delivery_address: (<Button variant="contained"onClick={() => navigate('/login')}>Vous n'êtes pas identifié, Veuillez vous connecter</Button>)}</h2>
        <div className={Styles.grid}>
          <Box sx={{textAlign: 'center', fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', marginTop: '1rem'}}> Adresse de livraison : {user.delivery_address? user.delivery_address: (<Button variant="contained"onClick={() => navigate('/login')}>Veuillez vous connecter</Button>)}</Box>
          <div className={`${Styles.header}`}>
            <Box className={Styles.item}>Nom du produit</Box>
            <Box className={Styles.item}>Marque</Box>
            <Box className={Styles.item}>Quantité</Box>
            <Box className={Styles.item}>Reductions</Box>
            <Box className={Styles.item}>prix unitaire</Box>
            <Box className={Styles.item}>prix total</Box>
          </div>

        {cart.map((product: IProductCart) => (
          <div className={Styles.row} key={product._id}>

            <Grid item xs={6}>
              <Box className={Styles.item}>{product.name}</Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={Styles.item}>{product.brand}</Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={Styles.item}>{product.quantity}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={Styles.item}>{0}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={Styles.item}>{product.price + '€'}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={Styles.item}>{product.price * product.quantity + '€' }</Box>
            </Grid>

          </div>
        ))}
        </div>
        <Box className={Styles.total}>
              <div>Prix de la commande</div>
              <div>{totalPrice}€</div>
        </Box>
        <Box>
          <Button disabled={!isValidCheckout} variant="contained" sx={{fontSize: '1.5rem'}} onClick={()=> handleCheckout()}>Passer la commande</Button>
        </Box>
    </Box>
  )
}
export default CartRecap