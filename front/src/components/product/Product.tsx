import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Styles from './Product.module.css'
import Carrousel from '../carousel/Carousel'
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
                <Carrousel product={product} autoplay={true} slides={1} arrows={false}/>
            </Grid>
            <Grid xs={8} >




            <Card  sx={{ p:2 }}> 
            <CardActions className={Styles.buy}>
        <Button color="error">{product.price}€</Button>
        <Button size="small"><AddShoppingCartIcon  className={Styles.add} /></Button>
      </CardActions>
            <CardContent>
  
                
                <div>Vendeur : {product.brand}</div>

                <div>description : {product.description}</div>
               
                <div>stock : {product.stock}</div>
                <div>rating : {product.rating}</div>
                <div>description : {product.createdAt}</div>

<div>ref : {id}</div>
            </CardContent>

               

                </Card>
    
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