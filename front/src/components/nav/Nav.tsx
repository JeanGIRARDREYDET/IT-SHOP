import './Nav.css'
const Nav = () => {
  return (
    <nav >
      <div id="brandshits" className="">
        <img src="" alt=""></img>
        logo shits
      </div>
      <div id="searchshits"><input type="text" placeholder="rechercher un produit"></input></div>
      <div id="navshits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <li className="">navitem 1</li>
          <li className="">navitem 2</li>
          <li className="">Panier</li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;