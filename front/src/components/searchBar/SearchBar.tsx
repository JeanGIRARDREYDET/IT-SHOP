import { KeyboardEvent, useState } from 'react';
import './SearchBar.css'

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
      <input type="text" placeholder="chercher un produit" onKeyUp={(e) => setSearchValue(e.currentTarget.value)}></input>
      <button type="button" onClick={handle}>rechercher</button>
    </>

  )
}

export default SearchBar;