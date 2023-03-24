import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { IProduct } from '../../types/product';
import ProductsCarousel from '../carousel/ProductsCarousel';
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
      <h1>HOME </h1>
      <div id="" className="carousel carousel-best"> 
        <ProductsCarousel items={prods} filter={'rating'} slides={3} autoplay={false} arrows={true} />
      </div>
      <div id="" className="carousel carousel-sells">

      </div>
      <div id="" className="carousel carousel-promotion"> carousel 3</div>
    </>
  ) 
}
export default Home;