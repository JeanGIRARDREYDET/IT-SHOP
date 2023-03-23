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
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react';
import { IProduct } from '../../types/product';

const Product = () => {
  
    let { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState<IProduct>()
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    
 
    useEffect(() => {
        const fetching = async () => {
            const {data, err, loading} = await useFetch<IProduct>(`http://localhost:3000/api/products/${id}`)
            console.log(data)
            if(data){
                setProduct(product => ({...product, ...data}))
            } else {
                setError(err)
            }
            console.log(product)
        }

    }, [])  

    //const location = useLocation();


  //  const product = location.state?.data;

 
  const image_url="/src/assets/products/"+id+"/"
    return (
    <>
     {error}
        <Grid container className={Styles.ficheProduit}>
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
                        <div>Vendeur : { product.brand } </div>
                        <div> { product.description } </div>
                        <div>En stock : { product.stock } </div>
                        <div>rating : { product.rating } </div>
                        <div>description : { product.createdAt } </div>
                        <div>ref : {id}</div>
                    </CardContent>
                </Card>
            </Grid>
            <ProductImagesList product={product} />
        </Grid>
        <div>
                    {/* <div>categories : 
                        {product.categories.map( (categorie:string, index: number) => 
                            <div key={"Cat_"+index}>{categorie}-</div>)}
                    </div> */}
  
        </div>
    </>
    )
}

export default Product