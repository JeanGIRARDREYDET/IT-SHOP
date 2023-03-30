import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import Box from '@mui/material/Box';
import ProductFilter from "../productFilter/ProductFilter";
import Style from "./Products.module.css"
import useFetch from "../../hooks/useFetch";
import { IProduct } from "../../types/product";
import Loading from "../utils/Loading";



const Products = () => {
  const [prods, setProds] = useState([])
  const [filter, setFilter] = useState({name: '', brand: '', category: '', rating: -1, priceRange: []})

  const {data, err} = useFetch<IProduct[] | []>('/products')
  
  const handleFiltering = (filter: any) => {
    setFilter(f => ({...f, ...filter}))
  }

  const filtering = (p: IProduct) => {


    return filter.name !== "" ? new RegExp(filter.name, 'i').test(p.name): true
        //&& filter.brand !== ""? new RegExp(filter.brand, 'i').test(p.brand): false
        //&& filter.category !== "" ? p.categories.includes(filter.category): false
  }
  const regName = (val: string) => new RegExp(filter.name, 'gi').test(val)
  const regBrand = (val: string) => new RegExp(filter.brand, 'gi').test(val)

  const filterByName = (p: IProduct) => {
    if(filter.hasOwnProperty('name') && filter.name !== "") {
      regName(p.name) ? true: false
    } else {
      return true
    }
  }
  const globalFilter = (ps: IProduct[]):IProduct[] | [] => {
    const fn = filter.name !== '' ? ps.filter(p => regName(p.name)) : ps
    const fb = filter.brand !== '' ? fn.filter(p => regBrand(p.brand)) : fn
    const fr = filter.rating !== -1 ? fb.filter(p => p.rating >= filter.rating) : fb
    const fc = filter.category !== '' ? fr.filter(p => p.categories.includes(filter.category)) : fr
    const fp = filter.priceRange.length === 2 ? fc.filter(p => p.price > filter.priceRange[0] && p.price < filter.priceRange[1]) : fc
    return [...new Set(fp)]
  }

  useEffect(() => {
    if(err)
      console.log(err)
    if(data){

      setProds(p => [...p, ...data])
    }
  }, [data]) 
    
  return (
    <>
    
    { 
      prods.length > 0 ? (
        <div>
      <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>Nos produits</h1>
        <ProductFilter  products={prods} onFilter={handleFiltering} />
        <Box sx={ {display: "flex", flexWrap: "wrap", justifyContent: "center", mt:2}} >
          { globalFilter(prods).map((product, index) => {
          //make the filtering logic here with filter
            return (
           
              <ProductCard  product={product} key={index}/>

            )
          }) }
        </Box>
      </Box>
      </div>
      ):<Loading />}

    </>
  )
}

export default Products