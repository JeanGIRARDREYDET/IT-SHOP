import { Box, Button, Input, InputLabel } from "@mui/material"
import { useEffect, useState } from "react"
import { IProduct } from "../../types/product"
import { useNavigate } from 'react-router-dom'
import Style from "./productForm.module.css"

type Props = {
  product: IProduct | null
}

const ProductForm = ( { product }: Props) => {

  const navigate = useNavigate();

  const [name, setName] = useState( product !==null? product.name :'')
  const [brand, setBrand] = useState(product!==null? product.brand :'')
  const [description, setDescription] = useState(product!==null? product.description :'')
  const [images, setImages] = useState<string>('')
  const [categories, setCategories] = useState<Array<string>>([])
  const [price, setPrice] = useState<number | null>( product!==null? product.price : 0)
  const [stock, setStock] = useState<number | null>(product!==null? product.stock :0)
  const [rating, setRating] = useState<number | null>(product!==null? product.rating :0)
  
  const updateProduct = () => {

    const prod = {name, brand, description, images, categories, price, stock, rating,createdAt:new Date().toDateString()} 
    const transformeStringToArray = images.split(",")
    prod.images = transformeStringToArray
    const requestOptions = { method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({product: prod})};
    fetch(`${import.meta.env.VITE_API_URL}products/update`, requestOptions)
    .then(res=>{
        if(res.ok){
          navigate('/')
          alert("Produit bien modifiez !")
        }
    })
  } 

  const createProduct = () => {
    // fetch /products/add
    const prod = {name, brand, description, images, categories, price, stock, rating,createdAt:new Date().toDateString()} 
  
    const transformeStringToArray = images.split(",")
    console.log(transformeStringToArray)

    prod.images = transformeStringToArray
    prod.rating = 1

    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({product: prod})};
    fetch(`${import.meta.env.VITE_API_URL}/products/add`, requestOptions)
    .then(res=>{
        if(res.ok){
          navigate('/')
          
          alert("Vous êtes bien enregistré !")
        }
    })
    
  }
  const watchProd = () => {

  }
 useEffect(()=>{

  console.log(product)

 },[product])
  
  return (
      <div className={Style.productForm}>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="name-product">Nom</InputLabel>
        <Input id="name-product" aria-describedby="my-helper-text" type="text" defaultValue={product?.name} onChange={(event)=>{setName(event.currentTarget.value)}} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="brand-product">Marque</InputLabel>
        <Input id="brand-product" aria-describedby="my-helper-text" type="text" defaultValue={product?.brand} onKeyUp={(event)=>setBrand(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="description-product">Description</InputLabel>
        <Input id="description-product" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setDescription(event.currentTarget.value)} defaultValue={product?.description} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="images-product">Images</InputLabel>
        <Input id="images-product" aria-describedby="my-helper-text" type="text" placeholder="https://" defaultValue ={product?.images} onKeyUp={(event)=>{setImages(event.currentTarget.value);
        }}  />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="categories-product">Catégories</InputLabel>
        <Input id="categories-product" aria-describedby="my-helper-text" type="text" defaultValue ={product?.categories} onKeyUp={(event)=>setCategories(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="price-product">Prix</InputLabel>
        <Input id="price-product" aria-describedby="my-helper-text" type="number" defaultValue={product?.price} onKeyUp={(event)=>setPrice(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="stock-product">Stock</InputLabel>
        <Input id="stock-product" defaultValue ={product?.stock} aria-describedby="my-helper-text" type="number" onKeyUp={(event)=>setStock(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
            {product !== null ? (<Button variant="outlined" onClick={updateProduct} >Modifier ce produit</Button>): (<Button variant="outlined" onClick={(event)=>createProduct()} >Créer ce produit</Button>)}
      </Box>
    </div>
  )
}
export default ProductForm