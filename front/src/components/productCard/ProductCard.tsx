import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Style from "./Productcard.module.css";



import { Link } from 'react-router-dom';
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
  return (
    <div className="card">
      <div className="header">
        <img/>
      </div>
      <div className="main">
        
        <Link to={`/product/${product._id}`} >{product.name}</Link>
        
        name : {product.name}
        
      </div>
      <div className="footer">
   </div>
</div>
  )
}

export default ProductCard