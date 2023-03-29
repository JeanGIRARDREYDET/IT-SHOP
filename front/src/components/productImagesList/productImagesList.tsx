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
  const [PositionImage, setPositionImage] = useState(0)


  // fonction qui change la grande image
    const ChangeImage = (index: number) => {

      setPositionImage(index)
    }

    // Définition du chemin du produit
    const image_url="/src/assets/products/"+productImages._id+"/"
    return (
      <div className='Product-Detail'>

        {
          productImages && productImages.images && productImages.images.length > 0 ?
          (
            <>

        
        {
           productImages && productImages.images  && productImages.images.map((image:string,index:Number) => (
            
              (PositionImage === index) ? (
              
                <img className={Styles.GrandeImage} key={"Pil"+PositionImage} src={image_url+image} alt={productImages.name+ "_" + PositionImage} />
              ) : ""           
              
            ))
        }


      <Grid container className={Styles.productimages}> 

        {
          productImages && productImages.images  && productImages.images.map((image:string, index: number) => (
            <Grid item xs={12} lg={2}  key={"GrPil"+index}>  
            {
              <img onClick={()=> ChangeImage(index)} key={"Pil"+index} src={image_url+image} alt={productImages.name+ "_" + index} />            
            }
            </Grid>
          )) 
        }
    </Grid></>
          ) : ""
}
    </div>
      
    );
  }
export default ProductImagesList  