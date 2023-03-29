import { useParams } from 'react-router-dom';
import { Box, Grid, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from 'react';
import Styles from './Product.module.css';
import Carrousel from '../carousel/Carousel';
// import { useApi, TApiResponse } from '../../hooks/useApiGet';
import ProductImagesList from '../productImagesList/productImagesList';
import useFetch from '../../hooks/useFetch';
import { IProduct } from '../../types/product';
import { CartConsumerHook } from '../../context/CartContext';
import { ActionTypes } from '../../stores/CartStore';
 
const Product = () => {
    let { id } = useParams();
    const [product, setProduct] = useState<IProduct>({});
    const [error, setError] = useState({});
    const [{cart}, dispatch] = CartConsumerHook();
    const {data, err} = useFetch<IProduct>("products/" + id)

     

    const addToCart = () => {

        
        dispatch({type: ActionTypes.ADD_TO_CART, payload: product});
    }
    // const data: TApiResponse = useApi(
    //     "products/" + id
    // );
    // TApiResponses data is an object with data and error keys
    useEffect(() => {
        if (err) {
            setError(err);
        } else if (data) {
            setProduct(data);
        }
    }, [data]); // <- Changement ici, j'ai ajouté `data` comme dépendance

    
    
       return (

        <> 
             <Grid container className={Styles.ficheProduit}>
               
                <Grid className={product.images && product.images.length > 0 ? " " : Styles.productDecription} item xs={12} lg={ product.images && product.images.length > 0 ? 6 : 12}>
                    <Card sx={{ p: 2 }}>
                       
                       
                        <CardContent>
                            <h1>{product.name} </h1>
                            <Rating
                                name="product-rating"
                                value={product.rating}
                                readOnly
                            />
                            {product.stock > 0 ? (
                            <Box className={product.images && product.images.length > 0 ? " " : Styles.buy} sx={{display: 'flex'}}>
                                <CardActions  >
                                    <Typography variant='h4' color="error">{product.price}€</Typography>
                                    <Button  sx={{m: 2}} size="small"  onClick={() => addToCart()}>
                                              Ajoutez au Paniez                                    
                                    </Button>
                                
                                </CardActions>
                            </Box>
                        ) : (
                            <>
                                <div>
                                <Typography variant='h4' color="error"> 
                                        Victime de son succès le produit est        temporairement indisponible.
                                </Typography>
                                </div>
                                <div>Il sera de nouveau disponible trés prochainement</div>
                                <div>Merci de revenir plus tard.</div>
                            </>
                        )} 
                            
                            <h2>En stock : {product.stock}</h2>

                            <h2>Vendeur : {product.brand}</h2>
                            <h2>Description:</h2>
                            <div> {product.description}</div>
                        </CardContent>
                    </Card>
                    
                    
                </Grid>

     

                <Grid item xs={12} lg={6}>
                 
                 <ProductImagesList productImages={product} />
               </Grid>
                
                             

                
            </Grid>
           
        </>
    );
};
export default Product;