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

const ProductCard = ({product}: Props) => {

const image = `../../assets/products/${product._id}/${product.images[0]}`  
  return ( 
   
    <Card className={Style.Card} sx={{ width: 250 }}>
      <CardContent >

        <div className="header">
        <Link to={`/product/${product._id}`} state={{ data: product }}>
        <img src={image}/>
         
          </Link>
        </div>
        <div className="main">
        
       <h1 className={Style.title}>{product.name}</h1> 
       <h2 className={Style.rating}>{product.rating}</h2> 
        

        </div>
        <div className={Style.footer}>
        <Box sx={{ display: 'flex',
                  justifyContent: 'space-evenly'
      }}>
         <p className={Style.price}>{product.price}€</p>

          <p><AddShoppingCartIcon className={Style.add} /></p>

        </Box>
        </div>
      </CardContent>

    </Card>  


  )
}

export default ProductCard