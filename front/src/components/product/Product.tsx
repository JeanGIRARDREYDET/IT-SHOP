import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Styles from 'Product.module.css'
import Carrousel from '../carousel/Carousel'


const Product = () => {
    let { id } = useParams();
    const location = useLocation();
    const product = location.state?.data;

    return (
    <>
        <div>
            <div>
                <Carrousel product={product} autoplay={true} slides={1} />
            </div>
            <div>
                <h1>{product.name} </h1>
                <div>ref : {id}</div>
                <div>name : {product.name}</div>
                <div>brand : {product.brand}</div>
                <div>description : {product.description}</div>
                <div>Prix : {product.price}</div>
                <div>stock : {product.stock}</div>
                <div>rating : {product.rating}</div>
                <div>description : {product.createdAt}</div>

            </div>
        </div>

        <div>

                    <div>categories : {product.categories.map((item:string, index: number) => 
                                            <div key={index}>{item}-</div>
                                        )}</div>
                    

                
                
                    { product.images.map((item:string, index: number) => (
                        <div key={index}>{item}-</div>
                        ) 
                                            
                                        )
                    }

                    
        </div>


        
    
   
    




    </>
    )
}

export default Product