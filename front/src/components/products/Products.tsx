import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
const Products = () => {
  const [fetchRes, setFetchRes] = useState([])
  const url = 'localhost:3000/api/products'
  useEffect(() => {
    fetch(url).then(res => res.json()).then(result => [...fetchRes, result.products])
  }, [])
  return (
    <>
      <div className="container wrap desktop:columns-5 mobile:columns-2">
        { }
      </div>
    </>
  )
}

export default Products