import { IProduct, IProductCart } from "../../types/product"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Style from "./CartItem.module.css"
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ActionTypes } from "../../stores/CartStore";
import { CartConsumerHook } from "../../context/CartContext";
type Props = {product:IProductCart}

const CartItem = ({product}:Props) => {
    // @ts-ignore
    const [, dispatch] = CartConsumerHook();
    const images = `src/assets/products/${product._id}/${product.images[0]}`  
    
    const addProductQuantity = () => {
        dispatch({type: ActionTypes.ADD_TO_CART, payload: product})
    }

    const removeProductQuantity = () => {
        dispatch({type: ActionTypes.REMOVE_TO_CART, payload: product})
    }
    
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
            <td><button className={Style.ActionQuantities} onClick={removeProductQuantity}>-</button> {product.quantity} <button className={Style.ActionQuantities} onClick={addProductQuantity}>+</button></td>
        </tr>
       
    </tbody>

    </table>
        </>


    )   

}

export default CartItem