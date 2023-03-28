import { Link, redirect } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import ProTip from '../proTip/ProTip';
import SearchBar from '../searchBar/SearchBar';
import Style from'./Nav.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/IT_Shop.png"
import { Fragment, SyntheticEvent, useEffect, useState } from 'react';
import { IProduct, IProductCart } from '../../types/product'
import {useContext} from 'react'
import { CartConsumerHook } from '../../context/CartContext';
import { Button, IconButton, styled, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { getFromLocalStorage } from '../../utils/LocalStorage';
import Cookies from 'js-cookie';
import { ActionTypes } from '../../stores/CartStore';
import Product from '../product/Product';

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
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const Nav = ({onSearch}: Props) => {
  const [{user, cart}, dispatch] = CartConsumerHook();
  const [isAdmin, setIsAdmin] = useState(true)
  
  const [articles_number, setArticles_number] = useState(0)
  const nbArticles = cart.reduce((acc: number, c: IProductCart) => acc + c.quantity, 0 )
  const jerk = () => {
    let num = 0
    const cart = getFromLocalStorage().cart as IProductCart[]//.map(el => el) //.forEach(el => num += el.quantity)
    setArticles_number(cart.reduce((acc: number, c: IProductCart) => acc + c.quantity, 0 ))
    return num
  } 
  
   
  useEffect(()=> {
    if(articles_number === 0) {
      // setArticles_number(jerk())
    }
   
    if(!user._id && Cookies.get('user')) dispatch({type:ActionTypes.SET_USER_SESSION,payload:JSON.parse(Cookies.get('user'))})
    
    const localcart = getFromLocalStorage().cart.cart
    if(cart.length===0 && localcart && localcart.length>0){
       localcart.map(product=>{
        dispatch({
        type:ActionTypes.ADD_TO_CART,payload:product
        })
    })
        
    } 
    setArticles_number(nbArticles)
    setIsAdmin(Object.keys(user).length > 0 && user.role === 'admin'? true: false)

  }, [user, cart])
 
  return (
    <nav className={Style.navigator}>
      <div id="brandshits" className="">
      <NavLink to="/">
        <img className={Style.logo} src={Logo} alt=""/>
        </NavLink>
      </div>
      <div className={Style.searchshits}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div></div>
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <NavLink className={Style.Link} to="/products" >Products</NavLink>
          { isAdmin && <NavLink className={Style.Link} to="/admin"><AdminPanelSettingsIcon className='flex' /></NavLink> }
          <NavLink className={Style.Link} to="/login">

            <HtmlTooltip
              title={
                <Fragment>
                  <Typography color="inherit">{user.firstname && user.lastname ? `Bonjour ${user.firstname} ${user.lastname}`: ''}</Typography>
                    <em>{"Nous sommes"}</em> <b>{'TELLEMENT HEUREUX'}</b> <u>{'de vous revoir !'}</u>.{' '}
                </Fragment>
              }>
                  <IconButton><PersonIcon color={user._id? 'success':'inherit'}/></IconButton>
              </HtmlTooltip>
          </NavLink>
          <NavLink className={Style.Link} to="/cart"><ShoppingCartIcon className='flex' />
            <span className={Style.cartProductNumber}>{articles_number}</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;