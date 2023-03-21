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
        <img></img>
      </div>
      <div className="main">
        <>
        <Link to={`/products/${product._id}`} >{product.name}</Link>
        </>
        <>name : {product.name}</>
        
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default ProductCard