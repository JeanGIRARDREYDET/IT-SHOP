
export interface IProduct {
  id?: object | undefined;
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

      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default ProductCard