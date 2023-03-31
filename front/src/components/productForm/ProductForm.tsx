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
  const [id, setID] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<Array<string>>([])
  const [categories, setCategories] = useState<Array<string>>([])
  const [price, setPrice] = useState<number | null>(0)
  const [stock, setStock] = useState<number | null>(0)
  const [rating, setRating] = useState<number | null>(0)
  // const [prod, setprod] = useState<IProduct | null>(null)
  const updateProduct = () => {
    const prod = {
      _id: id,
      name, 
      brand, 
      description, 
      //@ts-ignore
      images: Array.isArray(images)? images : images.split(",").map(el => el.trim()), 
      //@ts-ignore
      categories: Array.isArray(categories)? categories : categories.split(",").map(el => el.trim()), 
      price, 
      stock, 
      rating, 
      createdAt: new Date().toDateString()
    } 
    // console.log(prod)
    // const transformeStringToArray = images.split(",")
    // prod.images = transformeStringToArray

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
    const prod = {
      name, 
      brand, 
      description, 
      // @ts-ignore
      images: Array.isArray(images)? images : images.split(",").map(el => el.trim()), 
      // @ts-ignore
      categories: Array.isArray(categories)? categories : categories.split(",").map(el => el.trim()), 
      price, 
      stock, 
      rating, 
      createdAt: new Date().toDateString()
    } 

    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({product: prod})};
    fetch(`${import.meta.env.VITE_API_URL}/products/add`, requestOptions)
    .then(res=>{
        if(res.ok){
          navigate('/')
          
          alert("Vous êtes bien enregistré !")
        }
    })
    
  }

 useEffect(()=>{
  setID(product && product._id? product._id: '')
  setName(product? product.name: '')
  setBrand(product? product.brand: '')
  setDescription(product? product.description : '')
  setImages(product? product.images: [])
  setCategories(product?.categories.length? product.categories : [])
  setPrice(product? product.price: 0)
  setStock(product? product.stock: 0)
  setRating(product? product.rating: 0)


 },[product])
  
  return (
      <div className={Style.productForm}>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="name-product">Nom</InputLabel>
        <Input id="name-product" aria-describedby="my-helper-text" type="text" value={name} onChange={(event)=>{setName(event.currentTarget.value)}} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="brand-product">Marque</InputLabel>
        <Input id="brand-product" aria-describedby="my-helper-text" type="text" value={brand} onChange={(event)=>setBrand(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="description-product">Description</InputLabel>
        <Input id="description-product" aria-describedby="my-helper-text" type="text" onChange={(event)=>setDescription(event.currentTarget.value)} value={description} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="images-product">Images</InputLabel>
        {/* @ts-ignore */}
        <Input id="images-product" aria-describedby="my-helper-text" type="text"  placeholder="https://" value={images} onChange={(event)=>{setImages(event.currentTarget.value)
        }}  />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="categories-product">Catégories</InputLabel>
                {/* @ts-ignore */}
        <Input id="categories-product" aria-describedby="my-helper-text" type="text" value ={categories} onChange={(event)=>setCategories(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="price-product">Prix</InputLabel>
                {/* @ts-ignore */}
        <Input id="price-product" aria-describedby="my-helper-text" type="number" value={price} onChange={(event)=>setPrice(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
        <InputLabel htmlFor="stock-product">Stock</InputLabel>
                {/* @ts-ignore */}
        <Input id="stock-product" value ={stock} aria-describedby="my-helper-text" type="number" onChange={(event)=>setStock(event.currentTarget.value)} />
      </Box>
      <Box sx={{p: 2}}>
            {product !== null ? (<Button variant="outlined" onClick={updateProduct} >Modifier ce produit</Button>): (<Button variant="outlined" onClick={(event)=>createProduct()} >Créer ce produit</Button>)}
      </Box>
    </div>
  )
}
export default ProductForm