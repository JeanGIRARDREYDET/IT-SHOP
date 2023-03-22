import { Button, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { IProduct } from '../../types/product'
import Styles from './ProductFilter.module.css'

type Props = {
  products: IProduct[],
  onFilter: any
}

// export interface IProduct {
//   _id?: object | undefined;
//   name: string;
//   brand: string;
//   description: string;
//   categories: string[];
//   images: string[];
//   price: number;
//   stock: number;
//   rating: number;
//   createdAt: Date;
// }

const ProductFilter = ({products, onFilter}: Props) => {
  const [filter, setFilter] = useState({})
  const categoriesRaw = products.map(product => [...product.categories])
  const categoriesFlat = categoriesRaw.reduce((acc, currentCategory) => {
    if(currentCategory) return acc.concat(currentCategory)}, [])
  const categories = [...new Set(categoriesFlat.filter(cat => cat !== ''))]
  const handleSelect = (e: SelectChangeEvent) => {
    setFilter({...filter, categorie: e.target.value})

  }

  const submitFilter = () => {
    onFilter(filter)
  }

  return (
    <div className={Styles.nav}>
      <FormControl>
        <InputLabel>{filter?.categorie?.toString()}</InputLabel>
        <select value={''} onChange={handleSelect}>
        {categories.map((categorie, index) => (
          <option value={categorie} key={categorie + '' + index}>
            {categorie}
          </option>
        ))}
      </select>
      </FormControl>
      <Button variant="outlined" onClick={submitFilter}> Filter </Button>
    </div>
  )
}
export default ProductFilter

{/*
mui example
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
*/}