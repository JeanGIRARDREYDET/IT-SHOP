import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
const Products = () => {
  const [fetchRes, setFetchRes] = useState([])
  const url = 'http://localhost:3000/api/products/all'
  useEffect(() => {
    fetch(url).then(res => res.json()).then(result => console.table(result))
  }, [])
  return (
    <><h1>Products</h1>
      <div className="container wrap desktop:columns-5 mobile:columns-2">
        { fetchRes.map(product => {
          return (<ProductCard product={product} />)
        }) }
      </div>
    </>
  )
}

export default Products