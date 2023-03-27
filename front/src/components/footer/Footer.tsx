import Style from './Footer.module.css'

import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

const Footer = () => {
  return (
    <div id={Style.footer}>
      <div id={Style.footerbrandshits}className="">
        <img src="" alt=""></img>
        <p>It-Shop</p> copyright shits
      </div>
      <div id={Style.searchfootershits}>
        <h1 className={Style.MessageMerci}>
      Merci de nous avoir choisi !
        </h1></div>
      <div id={Style.footershits} className="">
        <ul>
          { /*  or <li> via children ?  ADD ROUTER */ }
          <li className=""><LocalPhoneTwoToneIcon />: +0145789956</li>
          <li className=""><MailOutlineTwoToneIcon />: IT-Shop@gmail.fr</li>
          <li className=""><FacebookTwoToneIcon/>: IT-SHOP</li>
        </ul>
      </div>
    </div> 
  )
}
export default Footer;