import { Box, Button, ButtonGroup } from "@mui/material"
import { useState } from "react";
import CartRecap from "../components/cartRecap/CartRecap";
import CbForm from '../components/cbForm/CbForm'
import { CartConsumerHook } from "../context/CartContext";
import { IPaiement } from "../types/user";

const CheckOutPage = () => {
  const [{user, cart}, dispatch] = CartConsumerHook();
  const [paiementMethod, setPaiementMethod] = useState('')
  const [paiementInfos, setPaiementInfos] = useState<IPaiement | null>(null)
  const [delivery, setDelivery] = useState('')
  const handlePaiement = (value: IPaiement) => {
    setPaiementInfos(paiementInfos=> ({...paiementInfos, ...value}))
  }
  return (
    <>
    
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <h1>Paiement</h1>
      {paiementInfos === null && <ButtonGroup>
        <Button onClick={() => setPaiementMethod('cb')}>CB</Button>
        <Button onClick={() => setPaiementMethod('paypal')}>Paypal</Button>
      </ButtonGroup>}
      {paiementMethod === 'cb' && paiementInfos === null && <CbForm onCBFill={handlePaiement} />}
      {<CartRecap paiementInfos={paiementInfos} />}
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