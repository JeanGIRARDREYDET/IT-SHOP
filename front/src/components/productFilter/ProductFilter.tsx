import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Slider } from '@mui/material';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
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
  // @ts-ignore
  const categoriesFlat = categoriesRaw.reduce((acc, currentCategory: string) => {
    if(currentCategory) return acc.concat(currentCategory)}, [])
  const categories = [...new Set(categoriesFlat.filter(cat => cat !== ''))]
  // FOR PRICE RANGE DATA --------------------------
  const rawPrices = products.map(product => {
    if(product.price)
      return product.price
    }
  )
  // @ts-ignore
  const minPrice = Math.min(...rawPrices)
  // @ts-ignore
  const maxPrice = Math.max(...rawPrices)

  const [price, setPrice] = useState<Number[]>([minPrice, maxPrice])
  const ratings = [0, 1, 2, 3, 4, 5];
  // ------------------------------------------
  const priceText = (value: number) => {
    return `${value} €`;
  }

  const handleSelect = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string);
    setFilter({...filter, category: e.target.value === 'toutes' ? '': e.target.value})

  }

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value as string)
    setFilter({...filter, name: e.target.value})
  }

  const handleBrand = (e: ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value)
    setFilter({...filter, brand: e.target.value as string})
  }

  const handleRating = (e: SelectChangeEvent<HTMLInputElement>) => {
    setRating(+e.target.value)
    setFilter({...filter, rating: e.target.value})
  }

  const handlePrice = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
    setFilter({...filter, priceRange: newValue})
  }

  const submitFilter = () => {
    onFilter(filter)
  }

  return (
    <div className={Styles.nav} >

      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="name-input-label">Name</InputLabel>
          <Input onChange={handleName} placeholder="Name" />
        </FormControl>
      </Box>
      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="brand-input-label">Brand</InputLabel>
          <Input onChange={handleBrand} placeholder="Brand" />
        </FormControl>
      </Box>
      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Categories</InputLabel>
          <Select value={category} label="Categorie" onChange={handleSelect} >
            <MenuItem value={'toutes'} key={'no category'}>{'toutes'}</MenuItem>
            {categories.map((category, index) => (
              <MenuItem value={category} key={category+index}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="rating-select-label">Rating</InputLabel>
          {/* @ts-ignore */}
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
          { /* @ts-ignore */}
          <Slider
            value={price}
            onChange={handlePrice}
            valueLabelDisplay="auto"
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={price}
            getAriaValueText={priceText}
            min={minPrice?minPrice: 0}
            max={maxPrice?maxPrice: 100}
          />
        </FormControl>
      </Box>
      <Button variant="outlined" onClick={submitFilter}> Filter </Button>
    </div>
  )
}
export default ProductFilter
