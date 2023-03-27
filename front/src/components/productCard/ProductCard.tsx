import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Style from "./ProductCard.module.css"
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from "react"
import { ActionTypes } from '../../stores/CartStore';
import { CartConsumerHook } from '../../context/CartContext';
import { Box, Rating } from '@mui/material';




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
// const theme = useContext(ThemeContext);
  const [fetchRes, setFetchRes] = useState([])
  const [filter, setFilter] = useState({})
  const [{cart}, dispatch] = CartConsumerHook();
  
  const addProductToCart = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if(product.stock > 0) {
      dispatch({type: ActionTypes.ADD_TO_CART, payload: product});
    }
    

  }
  const url = 'http://localhost:3000/api/products'
  useEffect(() => {
    fetch(url).then(res => res.json()).then(result => {
     // console.table(result)
      setFetchRes(prev => [...prev, ...result])
    }
      )
  }, []) 

  return ( 
   
    <Link to={`/product/${product._id}`} state={{ data: product }}>
      <Card className={Style.Card} sx={{ width: 345,height:345 }}>
        <CardMedia
              sx={{ height: 140 }}
              image={images}
              title={product.name}
        />
        <CardContent>
          <Typography className={Style.title} gutterBottom variant="h5" component="div">
              {product.name.slice(0,25)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.slice(0,15)}
          </Typography>
          <Rating
            name="product-rating"
            value={product.rating}
            readOnly
          />
        </CardContent>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <CardActions className={Style.footer}>
            {product.stock === 0 ? (<Button color="error">{'----'}€</Button>): (<Button color="error">{product.price}€</Button>)}
            <Button size="small"><AddShoppingCartIcon onClick={(e) => addProductToCart(e)} className={Style.add} /></Button>
          </CardActions>
        </Box>
      </Card>
    </Link>
  )
}

export default ProductCard