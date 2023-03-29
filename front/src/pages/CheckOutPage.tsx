import { Box, Button, ButtonGroup } from "@mui/material"
import { useState } from "react";
import CbForm from '../components/cbForm/CbForm'
import { CartConsumerHook } from "../context/CartContext";
import { IPaiement } from "../types/user";

const CheckOutPage = () => {
  const [{user, cart}, dispatch] = CartConsumerHook();
  const [paiementMethod, setPaiementMethod] = useState('')
  const handlePaiement = (value: IPaiement) => {
    console.log(value)
  }
  return (
    <>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <h1>Paiement</h1>
      <ButtonGroup>
        <Button onClick={() => setPaiementMethod('cb')}>CB</Button>
        <Button onClick={() => setPaiementMethod('paypal')}>Paypal</Button>
      </ButtonGroup>
      {paiementMethod === 'cb' && <CbForm onCBFill={handlePaiement} />}
      {/* choix du moyen, de paiement => select ou autre direct sur la page sur la page*/ } 
      {/*enregistrement des données bancaires  => composant dédié */ }
      {/* choix des adresses de livraison et ou facturation composant dédié p e*/ }
      {/* choix d'un depot à proximité ? */ }
      {/*recapitulatif panier taxes etc => sur la page */ }
      {/**/ }
      </Box>
    </>
  )
}
export default CheckOutPage