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
import { IProduct, IProductCart } from '../../types/product'
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
  const [articles_number, setArticles_number] = useState(0)
  const nbArticles = cart.reduce((acc: number, c: IProductCart) => acc + c. quantity, 0 )
  useEffect(()=> {

    setArticles_number(nbArticles)

  }, [cart])

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
          <NavLink className={Style.Link} to="/products" >Products</NavLink>
          <NavLink className={Style.Link} to="/login"><PersonIcon /></NavLink>
          <NavLink className={Style.Link} to="/cart"><ShoppingCartIcon className='flex' />
            <span className={Style.cartProductNumber}>{articles_number}</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;