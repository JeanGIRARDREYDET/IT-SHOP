import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useState } from 'react'
import Styles from './Login.module.css'

const Login = ()=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLoginForm = () => {
    if (email !== "" && password !== "") {
      console.log(email, password)
    }  
  }
 return (
  <>
  <h1>Login</h1>
  
    <Box sx={{p: 2}}>
      
    
      <InputLabel htmlFor="email-login">Email address</InputLabel>
      <Input id="email-login" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setEmail(event.currentTarget.value)}/>

    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="password-login">Password</InputLabel>
      <Input id="password-login" aria-describedby="my-helper-text" type="password" onKeyUp={(event)=>setPassword(event.currentTarget.value)}/>

    </Box>
    <Box sx={{p: 2}}>
      <Button variant="outlined" onClick={handleLoginForm} >Se connecter</Button>
    </Box>
      
  </>

 )
}
export default Login