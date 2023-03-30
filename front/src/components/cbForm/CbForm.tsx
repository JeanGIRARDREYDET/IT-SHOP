import { Button, Box, Input, InputLabel } from "@mui/material"
import { useState } from "react"
import { IProductCart } from "../../types/product"
import { IPaiement } from "../../types/user"
type Props = {
  onCBFill: any
}


const CbForm = ({onCBFill}: Props) => {
  const [ownerName, setOwnerName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvc, setCVC] = useState('')
  const [expiration, setExpiration] = useState('')

  const handlePaiementMethod = () => {
    const p = {
    card_name: ownerName,
    card_number: cardNumber,
    cvc: cvc,
    expiration_date: expiration
    }
    return onCBFill(p)
  }

  return (
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <InputLabel htmlFor="ownername-paiment">Nom du propriétaire de la carte</InputLabel>
        <Input id="ownername-paiment" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setOwnerName(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <InputLabel htmlFor="cardnumber-paiment">numéro de la carte</InputLabel>
        <Input id="cardnumber-paiment" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setCardNumber(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <InputLabel htmlFor="cginumber-paiment">cgi de la carte</InputLabel>
        <Input id="cginumber-paiment" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setCVC(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <InputLabel htmlFor="cardexpire-product">Date d'expiration de la carte</InputLabel>
        <Input id="cardexpir-paiment"  aria-describedby="my-helper-text" type="date" onChange={(event)=>setExpiration(event.currentTarget.value)} />
      </Box>


      <Box sx={{p: 2}}>
            <Button variant="outlined" onClick={handlePaiementMethod} >Valider cette carte de paiement</Button>
      </Box>
    </Box>
  )
}
export default CbForm 