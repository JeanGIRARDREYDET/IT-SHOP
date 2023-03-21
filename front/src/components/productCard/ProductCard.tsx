<<<<<<< HEAD
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Style from "./Productcard.module.css";



=======
import { Link } from 'react-router-dom';
>>>>>>> 63b3af4c06a7125bd7fc33a8a10b192bf4c9ad7c
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
<<<<<<< HEAD
  return ( 
    <Card className={Style.Card} sx={{ width: 250 }}>
      <CardContent>

        <div className="header">
          <img></img>
        </div>
        <div className="main">
          name : {product.name}
        </div>
        <div className="footer">

        </div>
      </CardContent>

    </Card>  

=======
  return (
    <div className="card">
      <div className="header">
        <img></img>
      </div>
      <div className="main">
        <>
        <Link to={`/products/${product._id}`} >{product.name}</Link>
        </>
        <>name : {product.name}</>
        
      </div>
      <div className="footer">
>>>>>>> 63b3af4c06a7125bd7fc33a8a10b192bf4c9ad7c

  )
}

export default ProductCard