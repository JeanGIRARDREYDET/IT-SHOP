import { Box } from "@mui/material"

const CheckOutPage = () => {
  return (
    <>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <h1>Paiement</h1>
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