import { Box } from '@mui/material'
import Login from '../components/login/Login'
import SignIn from '../components/signin/SignIn'
import SignInFull from '../components/signInFull/SignInFull'
type ILogin = {
  email: string,
  password: string
}
type IUser = {

  firstname: string,
  lastname: string,
  bill_address: string,
  delivery_address: string,
  email: string,
  password: string,
 //  role?: UserRoles;
  phone: string,
  date_of_birth: Date

}

type IUserConnection = {
  email: string,
  password: string
}

const handleLogin = (credentials: ILogin) => {
  console.log(credentials)
}

const handleSignIn = (userCredentials: ILogin) => {
  console.log(userCredentials)
}

const handleSignInFull = (userInfos: IUser) => {
  console.log(userInfos)
}

const LoginPage = () => {
  return (
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Login onLogin={handleLogin}/>
      <SignIn onSignIn={handleSignIn} />
      <SignInFull onSignInFull={handleSignInFull} />
    </Box>

  )
}
export default LoginPage