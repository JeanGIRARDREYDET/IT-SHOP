import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Styles from 'Product.module.css'
import Carrousel from '../carousel/Carousel'
import { Grid, Box } from '@mui/material';


const Product = () => {
    let { id } = useParams();
    const location = useLocation();
    const product = location.state?.data;

    return (
    <>
      
        <Grid container spacing={2}> 
        <Grid xs={12}><h1>{product.name} </h1></Grid>
            <Grid xs={4}>
                <br></br>
                <Carrousel product={product} autoplay={true} slides={1} />
            </Grid>
            <Grid xs={8} >
              <Box sx={{p: 2}}>
               
                <div>ref : {id}</div>
                <div>name : {product.name}</div>
                <div>brand : {product.brand}</div>
                <div>description : {product.description}</div>
                <div>Prix : {product.price}</div>
                <div>stock : {product.stock}</div>
                <div>rating : {product.rating}</div>
                <div>description : {product.createdAt}</div>
              </Box>
            </Grid>
        </Grid>

        <div>

                    <div>categories : {product.categories.map((item:string, index: number) => 
                                            <div key={index}>{item}-</div>
                                        )}</div>
                    

                
                
                    { product.images.map((item:string, index: number) => (
                        <div key={index}>{item}-</div>
                        ) 
                                            
                                        )
                    }

                    
        </div>
    </>
    )
}

export default Product