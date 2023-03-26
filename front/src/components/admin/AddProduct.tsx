import { Box } from "@mui/material"
import ProductForm from "../productForm/ProductForm"

const AddProduct = () => {
  return (
    <>

      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
        <h2>Ajouter un produit</h2>

        {<ProductForm product={null} />}
      </Box>
    </>
  )
}
export default AddProduct