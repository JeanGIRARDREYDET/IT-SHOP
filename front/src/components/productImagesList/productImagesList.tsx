import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, { Component } from "react";
import { IProduct } from '../../types/product';
import { Grid, Box } from '@mui/material';
import Styles from './ProductImagesList.module.css';
type Props = {
  product:IProduct
}
const ProductImagesList = ({product}:Props)=>  {
    // Définition du chemin du produit
    const image_url="/src/assets/products/"+product._id+"/"
    return (
      <Grid container className={Styles.productimages}> 
        {
          //src/assets/products/${product._id}/
          product.images.map((image:string, index: number) => (
            <Grid item xs={12} lg={6}>  
              <img  key={index} src={image_url+image} alt={product.name+ "_" + index} />
            </Grid>
          )) 
        }
    </Grid>
    );
  }
export default ProductImagesList