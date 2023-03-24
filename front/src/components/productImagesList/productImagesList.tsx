import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, { Component } from "react";
import { IProduct } from '../../types/product';
import { Grid, Box } from '@mui/material';
import Styles from './ProductImagesList.module.css';
type Props = {
  productImages:IProduct
}
const ProductImagesList = ({productImages}:Props)=>  {
    // Définition du chemin du produit
    const image_url="/src/assets/products/"+productImages._id+"/"
    return (
      <Grid container className={Styles.productimages}> 
        {
          //src/assets/products/${product._id}/
          productImages && productImages.images  && productImages.images.map((image:string, index: number) => (
            <Grid item xs={12} lg={6}  key={"GrPil"+index}>  
              <img key={"Pil"+index} src={image_url+image} alt={productImages.name+ "_" + index} />
            </Grid>
          )) 
        }
    </Grid>
    );
  }
export default ProductImagesList