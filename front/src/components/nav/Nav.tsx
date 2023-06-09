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
import { Button, IconButton, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from '@mui/material';
import { getFromLocalStorage } from '../../utils/LocalStorage';
import Cookies from 'js-cookie';
import { ActionTypes } from '../../stores/CartStore';
import Product from '../product/Product';
import LogoutIcon from '@mui/icons-material/Logout';

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
  //@ts-ignore
  const [{user, cart}, dispatch] = CartConsumerHook();
  const [isAdmin, setIsAdmin] = useState(true)
  
  const [articles_number, setArticles_number] = useState(0)
  const nbArticles = cart.reduce((acc: number, c: IProductCart) => acc + c.quantity, 0 )
  // @ts-ignore
  const handleLogout = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({type: ActionTypes.UNSET_USER_SESSION})
    Cookies.remove('user')
    Cookies.remove('token')
    Cookies.remove('SESSION_COOKIE_NAME')
  } 
  useEffect(()=> {
    const cookiesAcceptes = Cookies.get('cookiesAcceptes')
    if(!cookiesAcceptes) {
      const ConfirmeCookieMessage="Ce site utilise des cookies pour améliorer votre expérience de navigation. "+
      "Les cookies sont de petits fichiers texte qui sont stockés sur votre ordinateur par ce site web. Nous "+
      "utilisons des cookies pour nous aider à analyser l'utilisation du site et à améliorer votre expérience de "+
      "navigation.\n\nEn cliquant sur \"OK\", vous consentez à l'utilisation de tous les cookies."
      confirm(ConfirmeCookieMessage) ? Cookies.set('cookiesAcceptes','true') : Cookies.set('cookiesAcceptes','false')
    
   }


    if(!user && Cookies.get('user')) dispatch({type:ActionTypes.SET_USER_SESSION,payload:JSON.parse(Cookies.get('user')?? '')})
    
    const localcart = getFromLocalStorage().cart.cart
    if(cart.length===0 && localcart && localcart.length>0){
       localcart.map(product=>{
        dispatch({
        type:ActionTypes.ADD_TO_CART,payload:product
        })
        
    })
        
    } 
    setArticles_number(nbArticles)
    setIsAdmin(Object.keys(user?? {}).length > 0 && user.role === 'admin'? true: false)

  }, [user, cart])
 
  return (
    <nav className={Style.navigator}>
      <div id="brand-container" className={Style.logoContainer}>
        <NavLink to="/">
          <img className={Style.logo} src={Logo} alt=""/>
        </NavLink>
      </div>
      <div className={Style.searchshits}>
        {/* @ts-ignore */}
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <NavLink className={Style.Link} to="/products" >Produits</NavLink>
          { isAdmin && <NavLink className={Style.Link} to="/admin"><AdminPanelSettingsIcon className={''} /></NavLink> }

          <NavLink className={Style.Link} to="/login">

            <HtmlTooltip
              title={
                <Fragment>
                  <Typography color="inherit">{user && user.firstname && user.lastname ? `Bonjour ${user.firstname} ${user.lastname}`: ''}</Typography>
                    {user && (<><em>{"Nous sommes"}</em> <b>{'TELLEMENT HEUREUX'}</b> <u>{'de vous revoir !'}</u>.{' '}</>)}
                    {/* @ts-ignore */}
                    {Cookies.get('user') && (<Button onClick={(e) => handleLogout(e)}><LogoutIcon className='flex' /></Button>)}
                    
                </Fragment>
              }>
                  <IconButton><PersonIcon color={user && user._id? 'success':'inherit'} className={Style.userIcon} /></IconButton>
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