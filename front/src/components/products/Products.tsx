import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import Box from '@mui/material/Box';
import ProductFilter from "../productFilter/ProductFilter";
import Style from "./Products.module.css"
import useFetch from "../../hooks/useFetch";
import { IProduct } from "../../types/product";



const Products = () => {
  const [prods, setProds] = useState([])
  const [filter, setFilter] = useState({name: '', brand: '', category: '', rating: -1, priceRange: []})

  const {data, err} = useFetch<IProduct[] | []>('/products')

  const handleFiltering = (filter: any) => {
    setFilter(f => ({...f, ...filter}))
  }

  const filtering = (p: IProduct) => {
    // const filtres = Object.keys(filter).filter(key => filter[key] !== "" || filter[key] !== [])
     const completeFilterExample= {
        brand: "dzzdzd",
        category: "automobile",
        name: "zddz",
        priceRange: [ 3841, 6113 ],
        rating: 4
      }
      // const filteringreturnexample = el.Age >=15 && el.RollNumber <= 200 && el.Marks >= 80 ;
    console.log(filter.name)
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
    return fp
  }

  useEffect(() => {
    if(err)
      console.log(err)
    if(data)
      setProds(p => [...p, ...data])
  }, [data]) 
  
  return (
    <><h1>Products</h1>

      <Box sx={{}}>
      <ProductFilter  products={prods} onFilter={handleFiltering} />
      <div className={Style.ListProducts}>
        { globalFilter(prods).map((product, index) => {
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