import { IProduct } from "../../types/product"
type Props = {product:IProduct}

const CartItem = ({product}:Props) => {

    return(


        <>
        
        {product.name}
        
        </>


    )


}