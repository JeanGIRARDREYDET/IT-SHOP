import Styles from './UserInfos.module.css'
import { Box } from "@mui/material"
import { IUser } from "../../types/user"

type Props = {
  user: IUser
}

// export interface IUser {
//   _id?: string;
//   firstname: string;
//   lastname: string;
//   bill_address: string;
//   delivery_address: string;
//   email: string;
//   pwdHash?: string;
//   role?: UserRoles;
//   phone: string;
//   date_of_birth: Date;
//   cart: ICart;
//   orders: IOrder[];
//   createdAt: Date
// }

const UserInfos = ({user}: Props) => {
  return (
    <Box >
      <Box className={Styles.container}>

        <div className={Styles.grid}>
          <div>Prénom</div>
          <div>{ user.firstname }</div>
        </div>
        <div className={Styles.grid}>
          <div>Nom</div>
          <div>{ user.lastname }</div>
        </div>
        <div className={Styles.grid}>
          <div>Adresse de livraison</div>
          <div>{ user.delivery_address }</div>
        </div>
        <div className={Styles.grid}>
          <div>Adresse de facturation</div>
          <div>{ user.bill_address }</div>
        </div>
        <div className={Styles.grid}>
          <div>Email</div>
          <div>{user.email}</div>
        </div>
        <div className={Styles.grid}>
          <div>Telephone</div>
          <div>{user.phone}</div>
        </div>
        <div className={Styles.grid}>
          <div>Date de naissance</div>
          <div>{new Date(user.date_of_birth).toLocaleDateString('fr', {timeZone: "UTC"})}</div>
        </div>


      </Box>
    </Box>
  )
}
export default UserInfos