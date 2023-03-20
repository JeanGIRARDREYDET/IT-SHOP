import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
  return (
    <nav >
      <div id="brandshits" className="">
        <img src="" alt=""></img>
        <div>Home redirection</div>
      </div>
      <div id="searchshits"><input type="text" placeholder="rechercher un produit"></input></div>
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