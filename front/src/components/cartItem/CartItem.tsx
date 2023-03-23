import { IProduct } from "../../types/product"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Style from "./CartItem.module.css"
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
type Props = {product:IProduct}

const CartItem = ({product}:Props) => {
    const images = `src/assets/products/${product._id}/${product.images[0]}`  

    return(


        <div className={Style.cart}>

        <Link to={`/product/${product._id}`} state={{ data: product }}>
        <img src={images}/>
        </Link>
         
         <p>{product.name.slice(0,20)} </p>
         <p> {product.description.slice(0,20)} </p>
         <p> {product.price}€ </p>
             

        </div>


    )   

}

export default CartItem