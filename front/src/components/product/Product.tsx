import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Styles from 'Product.module.css'

const Product = () => {
    let { id } = useParams();
    const location = useLocation();
    const product = location.state?.data;
    return (
    <>
    <h1>The Best Product is {id}</h1>
    <div>name : {product.name}</div>
    <div>brand : {product.brand}</div>
    <div>description : {product.description}</div>

    </>
    )
}

export default Product