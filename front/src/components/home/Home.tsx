import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { IProduct } from '../../types/product';
import ProductsCarousel from '../carousel/ProductsCarousel';
import Test from '../testCustomHook/Test';
import './Home.css'
const Home = () => {
  const [prods, setProds] = useState<IProduct[] | []>([])
  const { data, err } = useFetch<IProduct[]>('/products')
  useEffect(() => {
    if(data)
      setProds(prods => ([...prods, ...data]))
    if(err)
      console.log(err)
  }, [data])
  return (
    <> 
      <h1>Bienvenue sur IT-SHOP &#x1F605; </h1>
      <div id="" className="carousel carousel-best"> 
        <Typography component="div" variant="h4" mt={2} mb={2}>
            Les produits les mieux notés
        </Typography>

        <ProductsCarousel  items={prods} filter={'bestRatings'} slides={3} autoplay={false} arrows={true} />

        
      </div>
      <div id="" className="carousel carousel-sells">
        <Typography component="div" variant="h4" mt={2} mb={2}>
            Les produits les plus vendus
        </Typography>
        <ProductsCarousel items={prods} filter={'bestsellers'} slides={3} autoplay={false} arrows={true} />
      </div>
      <div id="" className="carousel carousel-promotion">
        <Typography component="div" variant="h4" mt={2} mb={2}>
            Les promos du moment
        </Typography>
        <ProductsCarousel items={prods} filter={'bestdeals'} slides={3} autoplay={false} arrows={true} />
      </div>
    </>
  ) 
}
export default Home;