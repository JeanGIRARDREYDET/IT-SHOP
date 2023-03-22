import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import Box from '@mui/material/Box';
import ProductFilter from "../productFilter/ProductFilter";
import Style from "./Products.module.css"
const handleFiltering = (filter: any) => {
  console.log(filter)
}
const Products = () => {
  const [fetchRes, setFetchRes] = useState([])
  const [filter, setFilter] = useState({})
  const url = 'http://localhost:3000/api/products'
  useEffect(() => {
    fetch(url).then(res => res.json()).then(result => {
     // console.table(result)
      setFetchRes(prev => [...prev, ...result])
    }
      )
  }, [])
  return (
    <><h1>Products</h1>

      <Box   sx={{ display: 'flex',
                  flexWrap: 'wrap' ,
                  justifyContent: 'space-evenly' 
                }
              }>
      <ProductFilter  products={fetchRes} onFilter={handleFiltering} />
        { fetchRes.map((product, index) => {
          return (
          <div className={Style.ListProducts}>

<ProductCard  product={product} key={index}/>
          </div>
            )
        }) }
      </Box>

    </>
  )
}

export default Products