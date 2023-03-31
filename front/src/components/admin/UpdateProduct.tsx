import { Box, Button, Input, InputLabel } from "@mui/material"
import { SyntheticEvent, useEffect, useState } from "react"
import { IProduct } from "../../types/product"
import ProductForm from "../productForm/ProductForm"
import SearchBar from "../searchBar/SearchBar"

const UpdateProduct = () => {
  const [prod, setProduct] = useState<IProduct | null>(null)
  const [isProductForm, setisProductForm] = useState(false)

  const handleSearch = (event: SyntheticEvent<Element, Event>, value: IProduct | null) => {
    //@ts-ignore
    setProduct(prev => ({...prev,...value}))
    setisProductForm(true)
    // return redirect(`/product/${value?._id}`)
  }

  const updateProduct = () => {

  }

  useEffect(() => {

  }, [prod])
  return (
    <>
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
        {!prod && <h2>{`Modifier un produit`}</h2>}
        {prod &&<h2>{`Modifier ${prod?.brand} de la marque ${prod?.brand}`}</h2>}
        {  /*@ts-ignore*/}
        <SearchBar onSearch={handleSearch} />
        {prod && <ProductForm product={prod} />}
      </Box>
      
    </>
  )
}
export default UpdateProduct