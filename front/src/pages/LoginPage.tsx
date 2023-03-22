import { Box } from '@mui/material'
import { useState } from 'react'
import Login from '../components/login/Login'
import SignIn from '../components/signin/SignIn'
import SignInFull from '../components/signInFull/SignInFull'
import useFetch from '../hooks/useFetch'


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



const LoginPage = () => {

  const [isCreated, setIsCreated] = useState(false);

  const handleLogin = (credentials: ILogin) => {
    console.log(credentials)
  }
  const isUserNotInDatabase = () => {
    // fetch()
  }
  
  const handleSignIn = (userCredentials: ILogin) => {
    if(userCredentials.email && userCredentials.password) {
      setIsCreated(true)
      console.log(userCredentials)
    }
    
  }
  
  const handleSignInFull = (userInfos: IUser) => {
    console.log(userInfos)
  }


  return (
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <Login onLogin={handleLogin}/>
      {!isCreated && ( <SignIn onSignIn={handleSignIn} /> )}
      {isCreated && ( <SignInFull onSignInFull={handleSignInFull} /> )}
    </Box>

  )
}
export default LoginPage