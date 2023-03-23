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

        <>
        <hr ></hr>
        
    <table className={Style.Item}>
   
    <tbody>
        <tr>
            <td scope="row"><img className={Style.image} src={images} /></td>
            <td scope="row">{product.name.slice(0,20)}</td>
            <td scope="row">{product.description.slice(0,20)}</td>
            <td>{product.price} €</td>
            <td><button className={Style.ActionQuantities}>-</button> {0} <button className={Style.ActionQuantities}>+</button></td>
        </tr>
       
    </tbody>

    </table>
        </>


    )   

}

export default CartItem