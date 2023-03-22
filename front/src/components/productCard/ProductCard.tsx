import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Style from "./ProductCard.module.css"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from "react"




export interface IProduct {
  _id?: object | undefined;
  name: string;
  brand: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  stock: number;
  rating: number;
  createdAt: Date;
}

type Props = {
  product: IProduct
}



const ProductCard = ({product}: Props) => {

const images = `src/assets/products/${product._id}/${product.images[0]}`  

const [fetchRes, setFetchRes] = useState([])
  const [filter, setFilter] = useState({})
  const url = 'http://localhost:3000/api/products'
  useEffect(() => {
    fetch(url).then(res => res.json()).then(result => {
     // console.table(result)
      setFetchRes(prev => [...prev, ...result])
    }
      )
  }, []) 

  const AddProductToCart = (e,nomProduit)=>{
  
    e.preventDefault()
    e.stopPropagation()
    console.log(nom);
  
    
  
    const ProduitPanier =fetchRes.find(p=>p.name===nomProduit)
  
    console.log(ProduitPanier);
    
  
  
  }


  return ( 
   
        <Link to={`/product/${product._id}`} state={{ data: product }}>



<Card className={Style.Card} sx={{ width: 345,height:345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={images}
        title="green iguana"
      />
      <CardContent>
        <Typography className={Style.title} gutterBottom variant="h5" component="div">
        {product.name.slice(0,25)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {product.description.slice(0,15)}
        </Typography>
      </CardContent>

      <CardActions className={Style.footer}>
        <Button color="error">{product.price}€</Button>
        <Button size="small"><AddShoppingCartIcon onClick={(e)=>AddProductToCart(e,product.name)} className={Style.add} /></Button>
      </CardActions>
    </Card>


    
    </Link>


  )
}

export default ProductCard