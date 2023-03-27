import Styles from './UserInfos.module.css'
import { Box } from "@mui/material"
import { IUser } from "../../types/user"

type Props = {
  user: IUser
}
const UserInfos = ({user}: Props) => {
  return (
    <Box className={Styles.container}>
      {user._id}
    </Box>
  )
}
export default UserInfos