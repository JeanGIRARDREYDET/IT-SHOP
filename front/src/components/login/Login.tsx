import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { ISessionUser } from '../../types/user'
import Styles from './Login.module.css'

type Props = {
  onLogin: any
}

const Login = ({onLogin}:Props)=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  // const {data, err} = useFetch<unKnown>('/auth/')
  const handleLoginForm = () => {
    if (email !== "" && password !== "") {
      const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify( { email, password } )};
      fetch("http://localhost:3000/api/auth/login", requestOptions).then(res=> {
        if(res.ok){
        } else {
          setLoginError(true)
        }
      })
      onLogin({email, password})
    }  
  }
  useEffect(() => {
    setLoginError(false)
  
  }, [email, password])
  
 return (
  <>
  <h1>Login</h1>
  
    <Box sx={{p: 2}} className={loginError ? Styles.error: ''}>
       
    
      <InputLabel htmlFor="email-login">Email address</InputLabel>
      <Input id="email-login" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setEmail(event.currentTarget.value)}/>

    </Box>
    <Box sx={{p: 2}} className={loginError? Styles.error: ''}>
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