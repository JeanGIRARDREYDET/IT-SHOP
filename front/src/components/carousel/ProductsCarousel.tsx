import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Style from './ProductsCarousel.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from '../../types/product';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type Props = {
  items:IProduct[],
  filter: string // define key of filtering remarkeable products
  slides : number,
  autoplay: boolean,
  arrows:boolean
}
const ProductsCarrousel = ( { items , filter='bestRatings', slides, autoplay, arrows } :Props ) => {
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
        <Slider className={Style.slide}  {...settings}>
        { 
          //src/assets/products/${product._id}/
          items && items.filter(i => i.images.length > 0)
          .filter(filtering)
          .map(prod => (
            <Card className={Style.card} sx={{ width: 400, height:400}} key={prod._id}>
              <CardHeader
            
                title={prod.name}
                subheader={prod.brand}
                />
                <CardMedia
                  component='img'
                  sx={{ height: 150 }}
                  image={`/src/assets/products/${prod._id}/${prod.images[0]}`}
                  alt={prod.name}
                />,                     

                <CardActions className={Style.footer}>
                   
                  <Typography color="error">Prix: {prod.price} €</Typography>
                  <IconButton  aria-label="add to favorites">
                    

                      
                      {/* // <FavoriteIcon className={Style.like}/>
   */}
                      <FavoriteBorderTwoToneIcon className={Style.like} />

                    
                  </IconButton>
                 
                </CardActions>
                 {/* <img  key={"CarImg_"+ prod._id} src={`/src/assets/products/${prod._id}/${prod.images[0]}`} alt={prod.name} width="200" height="100" /> */}

            </Card>
          ))
        //   items && productCarrousel.images && productCarrousel.images.map((image:string, index: number) => (
        //     <img  key={"CarImg_"+index} src={image_url+image} alt={productCarrousel.name+ "_" + index} style={{height:"50%",width:"50%" }}/>
        //  )) 
        }
        </Slider>
    );
  }
export default ProductsCarrousel