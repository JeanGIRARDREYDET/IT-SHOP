import './Footer.css'
const Footer = () => {
  return (
    <div id='footer'>
      <div id="footerbrandshits" className="">
        <img src="" alt=""></img>
        footer copyright shits
      </div>
      <div id="searchfootershits"><input type="text" placeholder="rechercher un produit"></input></div>
      <div id="footershits" className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <li className="">footer item 1</li>
          <li className="">footer item 2</li>
          <li className="">footer item 3</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer;