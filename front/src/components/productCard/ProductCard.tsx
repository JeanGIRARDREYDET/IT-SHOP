import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Style from "./Productcard.module.css";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export interface IProduct {
  _id?: object | undefined;
  name: string;
  brand: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  stock: number;
  rating: number;
  createdAt: Date;
}

type Props = {
  product: IProduct
}

const AddProductToCart = (e)=>{

  
  e.preventDefault()
  e.stopPropagation()

  console.log(e)


}

const ProductCard = ({product}: Props) => {

const image = `src/assets/products/${product._id}/${product.images[0]}`  

console.log(image);


  return ( 
   
        <Link to={`/product/${product._id}`} state={{ data: product }}>
    <Card className={Style.Card} sx={{ width: 260 }}>
      <CardContent >

        <div className="header">
        <img className={Style.images} src={image}/>
         
        </div>
        <div className="main">
        
       <h1 className={Style.title}>{product.name.slice(0,25)}...</h1> 
       <h2 className={Style.rating}>{product.rating}</h2> 
        

        </div>
        <div className={Style.footer}>
        <Box sx={{ display: 'flex',
                  justifyContent: 'space-evenly'
      }}>
         <p className={Style.price}>{product.price}€</p>

          <p><AddShoppingCartIcon onClick={(e)=>AddProductToCart(e)} className={Style.add} /></p>

        </Box>
        </div>
      </CardContent>

    </Card>  
    </Link>


  )
}

export default ProductCard