import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import Box from '@mui/material/Box';
import ProductFilter from "../productFilter/ProductFilter";
import Style from "./Products.module.css"
import useFetch from "../../hooks/useFetch";
import { IProduct } from "../../types/product";


const Products = () => {
  const [fetchRes, setFetchRes] = useState([])
  const [filter, setFilter] = useState({})

  const {data, err} = useFetch<IProduct[] | []>('/products')

  const handleFiltering = (filter: any) => {
    setFilter(f => ({...f, ...filter}))
  }
  useEffect(() => {
    if(err)
      console.log(err)
    if(data)
      setFetchRes(prods => [...prods, ...data])
  }, [data]) 
  
  return (
    <><h1>Products</h1>

      <Box sx={{}}>
      <ProductFilter  products={fetchRes} onFilter={handleFiltering} />
      <div className={Style.ListProducts}>
        { fetchRes.map((product, index) => {
          //make the filtering logic here with filter
          return (
          
              <ProductCard  product={product} key={index}/>

            )
        }) }
        </div>
      </Box>

    </>
  )
}

export default Products