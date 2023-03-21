import './SearchBar.css'

type Props = {
  onSearch: any
}

const SearchBar = ({onSearch}: Props) => {
  return (
    <input type="text" placeholder="chercher un produit" onKeyUp={onSearch}></input>
  )
}

export default SearchBar;