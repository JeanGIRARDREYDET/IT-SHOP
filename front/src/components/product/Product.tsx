import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Styles from 'Product.module.css'
import Carrousel from '../carousel/Carousel'

const Product = () => {
    let { id } = useParams();
    const location = useLocation();
    const product = location.state?.data;
    console.log(product);
    return (
    <>
    <Carrousel product={product} autoplay={true} slides={1} />
    <h1>The Best Product is {id}</h1>
    <div>name : {product.name}</div>
    <div>brand : {product.brand}</div>
    <div>description : {product.description}</div>
    


    <div>categories : {product.categories.map((item:string, index) => 
                             <div key={index}>cat-{item}-</div>
                           )}</div>
    <div>images : {product.images}</div>

   
   
    { product.images.map((item:string, index: number) => (
         <div key={index}>img-{item}-</div>
         ) 
                            
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