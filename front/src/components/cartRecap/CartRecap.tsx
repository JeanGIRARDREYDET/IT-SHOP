import { Box, Grid } from '@mui/material'
import { CartConsumerHook } from '../../context/CartContext'
import Styles from './CartRecap.module.css'
const CartRecap = () => {
  const[{card, user},] = CartConsumerHook();
  return (
    <Box className={Styles.container}>
        <h2>hello !!</h2>
        {card.map(product => (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Box className={Styles.item}>1</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={Styles.item}>2</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={Styles.item}>3</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={Styles.item}>4</Box>
            </Grid>
          </Grid>
        ))

        }
    </Box>

  )
}
export default CartRecap