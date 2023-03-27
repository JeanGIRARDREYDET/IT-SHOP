import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Style from './ProductsCarousel.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from '../../types/product';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from "react"
import { ActionTypes } from '../../stores/CartStore';
import { CartConsumerHook } from '../../context/CartContext';
import { Box, Rating } from '@mui/material';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';


type Props = {
  items:IProduct[],
  filter: string // define key of filtering remarkeable products
  slides : number,
  autoplay: boolean,
  arrows:boolean
}
const ProductsCarrousel = ( { items , filter='bestRatings', slides, autoplay, arrows } :Props ) => {

  console.log(items);
  
  // const [{cart}, dispatch] = CartConsumerHook();

  
  // const addProductToCart = (e: MouseEvent) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   if(items.names > 0) {
  //     dispatch({type: ActionTypes.ADD_TO_CART, payload: items});
  //   }
    

  // }


    // Définition du chemin du produit
    // const image_url=`/src/assets/products/${prod._id}/`
    const filtering = (p: IProduct) => {
      // return filter === 'rating' ? p.rating > 4 : false
      return true
    }  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay,
      centerMode: true,
      vertical: false,
      arrows,
      pauseOnFocus : true,
      swipe:true,
      adaptiveHeight: true
    };
    return (
      <Slider   {...settings}>
        { 
          //src/assets/products/${product._id}/
          items && items.filter(i => i.images.length > 0)
          .filter(filtering)
          .map(prod => (
            <Link to={`/product/${prod._id}`} state={{ data: prod }}>
  
                <Card className={Style.Card} sx={{ width: 345,height:345 }}>
                    <CardMedia
                          sx={{ height: 140 }}
                          image={ `src/assets/products/${prod._id}/${prod.images[0]}`}
                          title={prod.name}
                    /> 
                    <CardContent>
                      <Typography className={Style.title} gutterBottom variant="h5" component="div">
                          {prod.name.slice(0,25)}...
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {prod.description.slice(0,15)}
                      </Typography>
                      <Rating
                        name="product-rating"
                        value={prod.rating}
                        readOnly
                      />
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                      <CardActions className={Style.footer}>
                         

                        <Button color="error">{prod.stock === 0 ? 'indisponible': prod.price + '€'}</Button>
                        <Button >{prod.stock === 0 ? '': <FavoriteBorderTwoToneIcon className={Style.like}/>}</Button>
                        <Button disabled={prod.stock === 0} size="small">
                        {/* {prod.stock === 0 ? '': <AddShoppingCartIcon onClick={(e) => addProductToCart(e)} className={Style.add} />} */}
                          </Button>

                      </CardActions>
                    </Box>
          </Card>
      </Link>

          ))
        //   items && productCarrousel.images && productCarrousel.images.map((image:string, index: number) => (
        //     <img  key={"CarImg_"+index} src={image_url+image} alt={productCarrousel.name+ "_" + index} style={{height:"50%",width:"50%" }}/>
        //  )) 
        }
        </Slider>
    );
  }
export default ProductsCarrousel