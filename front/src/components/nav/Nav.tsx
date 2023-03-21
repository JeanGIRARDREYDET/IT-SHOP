import { Link } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import ProTip from '../proTip/ProTip';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/IT_Shop.png"
import CustomAutocomplete from '../autoComplete/AutoComplete';
import { SyntheticEvent, useEffect, useState } from 'react';



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

type IFormattedProduct = {
  _id: any,
  label: string,
  brand: string
}

type Props = {
  onSearch: any
}
const handleSearch = (event: SyntheticEvent<Element, Event>, value: IProduct | null) => {
  console.log(value)
}

const Nav = ({onSearch}: Props) => {
  const [formattedProducts, setFormattedProducts] = useState<IFormattedProduct[]>([])
  useEffect(()=> {
  }, [])
  return (
    <nav >
      <div id="brandshits" className="">
      <NavLink to="/">
        <img src={Logo} alt=""/>
        </NavLink>
        
        
      </div>
      <div id="searchshits">
        {/* <SearchBar onSearch={onSearch} /> */}
        <CustomAutocomplete onChange={handleSearch} />
      </div>
      <div></div>
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <NavLink to="/products" >Products</NavLink>
          <NavLink to="/login"><PersonIcon /></NavLink>
          <NavLink to="/cart"><ShoppingCartIcon /></NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;