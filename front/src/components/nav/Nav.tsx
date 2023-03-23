import { Link, redirect } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import ProTip from '../proTip/ProTip';
import SearchBar from '../searchBar/SearchBar';
import Style from'./Nav.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/IT_Shop.png"
import { SyntheticEvent, useEffect, useState } from 'react';
import { IProduct } from '../../types/product'
import {useContext} from 'react'
import { CartConsumerHook } from '../../context/CartContext';


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

type IFormattedProduct = {
  _id: any,
  label: string,
  brand: string
}

type Props = {
  onSearch: any
}
const handleSearch = (event: SyntheticEvent<Element, Event>, value: IProduct | null) => {
  // console.log(`product/${value?._id}`)
  window.location.replace(`/product/${value?._id}`);
  // return redirect(`/product/${value?._id}`)
}

const Nav = ({onSearch}: Props) => {
  const [{cart}, dispatch] = CartConsumerHook();

  useEffect(()=> {
  }, [])
  return (
    <nav >
      <div id="brandshits" className="">
      <NavLink to="/">
        <img className={Style.logo} src={Logo} alt=""/>
        </NavLink>
      </div>
      <div id="searchshits">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div></div>
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <NavLink to="/products" >Products</NavLink>
          <NavLink to="/login"><PersonIcon /></NavLink>
          <NavLink to="/cart"><ShoppingCartIcon className='flex' /><span className={Style.cartProductNumber}>{cart.length}</span></NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;