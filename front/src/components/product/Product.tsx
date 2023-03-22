import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Styles from 'Product.module.css'

const Product = () => {
    let { id } = useParams();
    const location = useLocation();
    const product = location.state?.data;
    console.log(product);
    return (
    <>
    <h1>The Best Product is {id}</h1>
    <div>name : {product.name}</div>
    <div>brand : {product.brand}</div>
    <div>description : {product.description}</div>



    <div>categories : {product.categories.map((item:string) => 
                             <div>cat-{item}-</div>
                           )}</div>
    <div>images : {product.images}</div>

   
   
    { product.images.map((item:string) => 
                             <div>img-{item}-</div>
                           )
                           }

  <div>Prix : {product.price}</div>
  <div>stock : {product.stock}</div>
  <div>rating : {product.rating}</div>
  <div>description : {product.createdAt}</div>

    </>
    )
}

export default Product