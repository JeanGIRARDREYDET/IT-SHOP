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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProductImagesList from '../productImagesList/productImagesList';

const Product = () => {
    let { id } = useParams();
    const location = useLocation();
    const product = location.state?.data;
    const image_url="/src/assets/products/"+product._id+"/"

  
    return (
    <>
        <Grid container>
            <Grid item xs={12} lg={6}>
                <Carrousel product={product} autoplay={true} slides={1} arrows={false}/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Card  sx={{ p:2 }}> 

                {product.stock > 0 ? (
                       <CardActions className={Styles.buy}>
                       <Button color="error">{product.price}€</Button>
                       <Button size="small"><AddShoppingCartIcon  className={Styles.add} /></Button>
                   </CardActions>
                ) : (<>
                    
                    <div>Victime de son succès le produit est temporairement indisponible.</div>
                    <div>Il sera de nouveau disponible trés prochainement</div>
                    <div>Merci de revenir plus tard.</div>
                    </>
                    )
                }
                


        
                    <CardContent>
                        <h1>{product.name} </h1>
                        <div>Vendeur : {product.brand}</div>
                        <div>description : {product.description}</div>
                        <div>stock : {product.stock}</div>
                        <div>rating : {product.rating}</div>
                        <div>description : {product.createdAt}</div>
                        <div>ref : {id}</div>
                    </CardContent>
                </Card>
            </Grid>
            <ProductImagesList product={product} />
        </Grid>
        <div>
                    <div>categories : {product.categories.map((categorie:string, index: number) => 
                                            <div key={"Cat_"+index}>{categorie}-</div>
                                        )}
                                        </div>
  
        </div>
    </>
    )
}

export default Product