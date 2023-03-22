import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import Styles from './Login.module.css'

const Login = ()=> {
 return (
  <>
  <h1>Login</h1>
  
    <Box sx={{p: 2}}>
      
    
      <InputLabel htmlFor="email-login">Email address</InputLabel>
      <Input id="email-login" aria-describedby="my-helper-text" type="text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="password-login">Password</InputLabel>
      <Input id="password-login" aria-describedby="my-helper-text" type="password" />
      <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
    </Box>
    <Box sx={{p: 2}}>
      <Button variant="outlined">Se connecter</Button>
    </Box>
      
  </>

 )
}
export default Login