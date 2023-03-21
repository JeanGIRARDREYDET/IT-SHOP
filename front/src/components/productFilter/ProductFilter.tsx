import { Button, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Styles from './ProductFilter.module.css'

type Props = {
  products: IProduct[],
  onFilter: any
}

export interface IProduct {
  _id?: object | undefined;
  name: string;
  brand: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  stock: number;
  rating: number;
  createdAt: Date;
}

const ProductFilter = ({products, onFilter}: Props) => {
  const [filter, setFilter] = useState({})
  const categoriesRaw = products.map(product => [...product.categories])
  const categoriesFlat = categoriesRaw.reduce((acc, curVal) => {
    if(curVal) return acc.concat(curVal)}, [])
  const categories = [...new Set(categoriesFlat.filter(cat => cat !== ''))]
  const handleSelect = (e: SelectChangeEvent) => {
    setFilter({...filter, categorie: e.target.value})

  }
  const submitFilter = () => {
    onFilter(filter)
  }
  return (
    <div className={Styles.nav}>
      <div>
        <div>{filter?.categorie?.toString()}</div>
        <select value={''} onChange={handleSelect}>
        {categories.map((categorie, index) => (
          <option value={categorie} key={categorie + '' + index}>
            {categorie}
          </option>
        ))}
      </select>
      </div>
      <Button onClick={submitFilter}> Filter </Button>
    </div>
  )
}
export default ProductFilter