import { Link } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import ProTip from '../proTip/ProTip';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Logo from "../../assets/IT_Shop.png"





type Props = {
  onSearch: any
}

const Nav = ({onSearch}: Props) => {
  return (
    <nav >
      <div id="brandshits" className="">
      <NavLink to="/">
        <img src={Logo} alt=""/>
        </NavLink>
        

        
      </div>
      <div id="searchshits">
        <SearchBar onSearch={onSearch} />
      </div>
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <NavLink to="/products" >Products</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/cart"><ShoppingCartIcon /></NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;