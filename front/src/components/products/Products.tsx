import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
const Products = () => {
  const [fetchRes, setFetchRes] = useState([])
  const url = 'http://localhost:3000/api/products/all'
  useEffect(() => {
    fetch(url).then(res => res.json()).then(result => {
     // console.table(result)
      setFetchRes(prev => [...prev, ...result])
    }
      )
  }, [])
  return (
    <><h1>Products</h1>
      <div className="container wrap desktop:columns-5 mobile:columns-2">
        { fetchRes.map((product, index) => {
          return (<ProductCard product={product} key={index}/>)
        }) }
      </div>
    </>
  )
}

export default Products