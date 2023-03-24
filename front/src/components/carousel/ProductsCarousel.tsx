import { Link } from 'react-router-dom';
import Slider from "react-slick";
// simport Styles from 'Carousel.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from '../../types/product';

type Props = {
  items:IProduct[],
  filter: string // define key of filtering remarkeable products
  slides : number,
  autoplay: boolean,
  arrows:boolean
}
const Carrousel = ( { items , filter='rating', slides, autoplay } :Props ) => {
    // Définition du chemin du produit
    // const image_url=`/src/assets/products/${prod._id}/`
    const filtering = (p: IProduct) => {
      // return filter === 'rating' ? p.rating > 4 : false
      return true
    } 
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: slides,
      slidesToScroll: 1,
      autoplay:autoplay,
      autoplaySpeed: 1000,
      centerMode: true,
      vertical: false,
      arrows: false,
      pauseOnFocus : true,
      swipe:false
    };
    return (
        <Slider {...settings}>
        {
          //src/assets/products/${product._id}/
          items && items.filter(i => i.images.length > 0)
          .filter(filtering)
          .map(prod => (
            <img  key={"CarImg_"+ prod._id} src={`/src/assets/products/${prod._id}/${prod.images[0]}`} alt={prod.name} style={{height:"50%",width:"50%" }}/>
          ))
        //   items && productCarrousel.images && productCarrousel.images.map((image:string, index: number) => (
        //     <img  key={"CarImg_"+index} src={image_url+image} alt={productCarrousel.name+ "_" + index} style={{height:"50%",width:"50%" }}/>
        //  )) 
        }
        </Slider>
    );
  }
export default Carrousel