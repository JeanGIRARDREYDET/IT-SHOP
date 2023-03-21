import { Link } from 'react-router-dom';
import ProTip from '../proTip/ProTip';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


type Props = {
  onSearch: any
}

const Nav = ({onSearch}: Props) => {
  return (
    <nav >
      <div id="brandshits" className="">
        <img src="" alt=""></img>
        <HomeOutlinedIcon />
      </div>
      <div id="searchshits">
        <SearchBar onSearch={onSearch} />
        <ProTip />
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