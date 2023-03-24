import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from 'react';
import Styles from './Product.module.css';
import Carrousel from '../carousel/Carousel';
import { useApiGet, TApiResponse } from '../../hooks/useApiGet';
import ProductImagesList from '../productImagesList/productImagesList';

const Product = () => {
    let { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({});
    const [error, setError] = useState({});

    const data: TApiResponse = useApiGet(
        "http://localhost:3000/api/products/" + id
    );
    console.log("Product component mounted, id: ", id); // Ajout d'un console.log pour vérifier le montage du composant et la valeur de l'ID

    if (!data.loading) console.log(data);

    console.log(26);
    console.log(data);

    useEffect(() => {
        if (data.error) {
            setError(data.error);
            console.log(data.error);
        } else if (data.data) {
            setProduct(data.data);
            console.log(data.data);
        }
    }, [data]); // <- Changement ici, j'ai ajouté `data` comme dépendance
   
    const image_url = "/src/assets/products/" + product._id + "/";

    return (
        <>
             <Grid container className={Styles.ficheProduit}>
                <Grid item xs={12} lg={6}>
                    <Carrousel productCarrousel={product} autoplay={true} slides={1} arrows={false} />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card sx={{ p: 2 }}>
                        {product.stock > 0 ? (
                            <CardActions className={Styles.buy}>
                                <Button color="error">{product.price}€</Button>
                                <Button size="small">
                                    <AddShoppingCartIcon className={Styles.add} />
                                </Button>
                            </CardActions>
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
                            <div>Vendeur : {product.brand}</div>
                            <div> {product.description}</div>
                            <div>En stock : {product.stock}</div>
                            <div>rating : {product.rating}</div>
                            <div>description : {product.createdAt}</div>
                            <div>ref : {id}</div>
                        </CardContent>
                    </Card>
                </Grid>
                <ProductImagesList productImages={product} />
            </Grid>
            <div>
                <div>
                    categories :{" "}
                    {product.categories &&
                        product.categories.map((categorie: string, index: number) => (
                            <div key={"Cat_" + index}>{categorie}-</div>
                        ))}
                </div>
            </div> 
        </>
    );
};

export default Product;