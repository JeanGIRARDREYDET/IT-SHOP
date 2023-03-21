import { KeyboardEvent, useState } from 'react';
import Style from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';


type Props = {
  onSearch: (inputValue: string) => void;
}


const SearchBar = ({onSearch}: Props) => {
  const [searchValue, setSearchValue] = useState('')

  const handle = () => {
    onSearch(searchValue)
  }

  
  return (
    <>
      <div
          className={Style.input1}
          >

            
      <input className={Style.searchBar} type="text" placeholder="chercher un produit" onKeyUp={(e) => setSearchValue(e.currentTarget.value)}></input>
    

      {/* <button className={Style.SearchIcone} onClick={handle}> 
      <SearchIcon  />
      </button> */}
        <Box sx={{ m: 1 }}>

          <SearchIcon onClick={handle} className={Style.cursor} />
        </Box>



      </div>
      
    </>

  )
}

export default SearchBar;