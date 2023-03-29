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
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && password !== "") {
      const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify( { email, password } )};
      fetch("http://localhost:3000/api/auth/login", requestOptions).then(res=> {
        if(res.ok){
          onLogin({email, password})
          alert("vous revoila !")
        } else {

          
          setLoginError(true)
          console.log("error !");
          
        }
      })
  
    }  
  }
  useEffect(() => {
    setLoginError(false)
  
    
  }, [email, password])
  
 return (
  <div className={Styles.Login}>
  <h1>Login</h1>

    {loginError ? <h2 className={Styles.TitreError}>Authentification incorrect</h2> : ""}
  
    <Box sx={{p: 2}} className={loginError ? Styles.errorEmail: ''}>
        
    
      <InputLabel htmlFor="email-login">Email address</InputLabel>
      <Input id="email-login" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setEmail(event.currentTarget.value)}/>

    </Box>
    <Box sx={{p: 2}} className={loginError? Styles.errorPassword: ''}>
      <InputLabel htmlFor="password-login">Password</InputLabel>
      <Input id="password-login" aria-describedby="my-helper-text" type="password" onKeyUp={(event)=>setPassword(event.currentTarget.value)}/>

    </Box>
    <Box sx={{p: 2}}>
      <Button variant="outlined" onClick={handleLoginForm} >Se connecter</Button>
    </Box>
      
  </div>

 )
}
export default Login 