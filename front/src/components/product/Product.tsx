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
                <Grid item xs={12} lg={6}>
                    <Carrousel productCarrousel={product} autoplay={true} slides={1} arrows={false} />
                    <ProductImagesList productImages={product} />

                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card sx={{ p: 2 }}>
                        {product.stock > 0 ? (
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <CardActions className={Styles.buy} >
                                    <Typography variant='h2' color="error">{product.price}€</Typography>
                                    <Button size="small" onClick={addToCart}>
                                        <AddShoppingCartIcon className={Styles.add} />
                                    </Button>
                                </CardActions>
                            </Box>
                        ) : (
                            <>
                                <div>
                                    Victime de son succès le produit est temporairement
                                    indisponible.
                                </div>
                                <div>Il sera de nouveau disponible trés prochainement</div>
                                <div>Merci de revenir plus tard.</div>
                            </>
                        )} 
                        <CardContent>
                            <h1>{product.name} </h1>
                            <Rating
                                name="product-rating"
                                value={product.rating}
                                readOnly
                            />
                            <div>Vendeur : {product.brand}</div>
                            <div> {product.description}</div>
                            <div>En stock : {product.stock}</div>
                            <div>rating : {product.rating}</div>
                            <div>description : {product.createdAt}</div>
                            <div>ref : {id}</div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/* <div>
                <div>
                    categories :{" "}
                    {product.categories &&
                        product.categories.map((categorie: string, index: number) => (
                            <div key={"Cat_" + index}>{categorie}-</div>
                        ))}
                </div>
            </div>  */} 
        </>
    );
};
export default Product;