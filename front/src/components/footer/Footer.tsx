import './Footer.css'

import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

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
          <li className=""><LocalPhoneTwoToneIcon />: +0145789956</li>
          <li className=""><MailOutlineTwoToneIcon />: It-Shop@gmail.fr</li>
          <li className=""><FacebookTwoToneIcon/>: II-SHOP</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer;