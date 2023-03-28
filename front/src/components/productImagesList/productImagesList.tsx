import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useLocation } from "react-router-dom";
import React, { Component } from "react";
import { IProduct } from '../../types/product';
import { Grid, Box } from '@mui/material';
import Styles from './productImagesList.module.css';
type Props = {
  productImages:IProduct
}
const ProductImagesList = ({productImages}:Props)=>  {
  const [nombre, setnombre] = useState(0)


  // fonction qui change la grande image
    const ChangeImage = (index) => {

      setnombre(index)
    }


    // Définition du chemin du produit
    const image_url="/src/assets/products/"+productImages._id+"/"
    return (
      <div className='Product-Detail'>
        {
           productImages && productImages.images  && productImages.images.map((image:string,index:Number) => (
            
              (nombre === index) ? (
              
                <img className={Styles.GrandeImage} key={"Pil"+nombre} src={image_url+image} alt={productImages.name+ "_" + nombre} />
              ) : ""           
              
            ))
        }


      <Grid container className={Styles.productimages}> 

        {
          //src/assets/products/${product._id}/
          productImages && productImages.images  && productImages.images.map((image:string, index: number) => (
            
            <Grid item xs={12} lg={2}  key={"GrPil"+index}>  
            {

              <img onClick={()=> ChangeImage(index)} key={"Pil"+index} src={image_url+image} alt={productImages.name+ "_" + index} />
              
            }
            </Grid>
          )) 
        }
    </Grid>
    </div>
    );
  }
export default ProductImagesList  