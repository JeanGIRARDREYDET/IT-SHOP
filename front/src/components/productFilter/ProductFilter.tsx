import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Slider } from '@mui/material';
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
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState(0);
  const categoriesRaw = products.map(product => [...product.categories])
  const categoriesFlat = categoriesRaw.reduce((acc, currentCategory) => {
    if(currentCategory) return acc.concat(currentCategory)}, [])
  const categories = [...new Set(categoriesFlat.filter(cat => cat !== ''))]
  // FOR PRICE RANGE DATA --------------------------
  const rawPrices = products.map(product => {
    if(product.price)
      return product.price
    }
  )
  const minPrice = Math.min(...rawPrices)
  const maxPrice = Math.max(...rawPrices)

  const [price, setPrice] = useState<Number[]>([minPrice, maxPrice])
  const ratings = [0, 1, 2, 3, 4, 5];
  // ------------------------------------------
  const priceText = (value: number) => {
    return `${value} €`;
  }

  const handleSelect = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string);
    setFilter({...filter, category: e.target.value})

  }

  const handleName = (e: KeyboardEvent) => {
    setName(e.target.value as string)
    setFilter({...filter, name: e.target.value})
  }

  const handleBrand = (e: KeyboardEvent) => {
    setBrand(e.target.value)
    setFilter({...filter, brand: e.target.value})
  }

  const handleRating = (e: SelectChangeEvent) => {
    setRating(e.target.value)
    setFilter({...filter, rating: e.target.value})
  }

  const handlePrice = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
    setFilter({...filter, priceRange: newValue})
  }

  const submitFilter = () => {
    console.log(filter)
    // onFilter(filter)
  }

  return (
    <div className={Styles.nav}>

      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="name-input-label">Name</InputLabel>
          <Input onKeyUp={handleName} placeholder="Name" />
        </FormControl>
      </Box>
      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="brand-input-label">Brand</InputLabel>
          <Input onKeyUp={handleBrand} placeholder="Brand" />
        </FormControl>
      </Box>
      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Categories</InputLabel>
          <Select value={category} label="Categorie" onChange={handleSelect} >
            {categories.map((category, index) => (
              <MenuItem value={category} key={category+index}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="rating-select-label">Rating</InputLabel>
          <Select value={rating} label="Rating" onChange={handleRating} >
            {ratings.map((rating, index) => (
              <MenuItem value={rating} key={rating+index}>{rating}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="rating-select-label">Price range</InputLabel>
          <Slider
            value={price}
            onChange={handlePrice}
            valueLabelDisplay="auto"
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={price}
            getAriaValueText={priceText}
            min={minPrice}
            max={maxPrice}
          />
        </FormControl>
    </Box>


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