import { KeyboardEvent, SyntheticEvent, useState } from 'react';
import Style from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';
import CustomAutocomplete from '../autoComplete/AutoComplete';


type Props = {
  onSearch: (event: SyntheticEvent<Element, Event>, value: IProduct | null) => void;
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


const SearchBar = ({onSearch}: Props) => {
  
  return (
    <>
      <div
          className={Style.input1}
          >

            
      <CustomAutocomplete onChange={onSearch} />
    

      {/* <button className={Style.SearchIcone} onClick={handle}> 
      <SearchIcon  />
      </button> */}
        <Box sx={{ m: 2 }}>

          <SearchIcon />
        </Box>



      </div>
      
    </>

  )
}

export default SearchBar;