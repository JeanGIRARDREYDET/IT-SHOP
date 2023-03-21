import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Style from "./Productcard.module.css";



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


  )
}

export default ProductCard