import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css'

type Props = {
  onSearch: any
}

const Nav = ({onSearch}: Props) => {
  return (
    <nav >
      <div id="brandshits" className="">
        <img src="" alt=""></img>
        <div>Home redirection</div>
      </div>
      <div id="searchshits">
        <SearchBar onSearch={onSearch} />
      </div>
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <li className="">Produits</li>
          <li className="">Catégories</li>
          <li className="">Panier</li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;