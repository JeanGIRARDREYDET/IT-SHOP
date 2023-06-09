import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useState } from 'react'
import { IUser } from '../../types/user'
import Styles from './SignIn.module.css'

type Props = {
  onSignIn: any
}
// type User = {
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
  
  
const SignIn = ({onSignIn}:Props)=> {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [bill_address, setBill_address] = useState('')
  const [delivery_address, setDelivery_address] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [role, setRole] = useState('')
  const [phone, setPhone] = useState('')
  const [date_of_birth, setDate_of_birth] = useState('')
  const [SigninErrorPassword, setSigninErrorPassword] = useState(false)
  const [SigninErrorEmail, setSigninErrorEmail] = useState(false)


  const handleSignInForm = () => {
    // verification du mail avec une regex et password
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && isSamePassword()) {
      onSignIn({firstname, lastname, bill_address, delivery_address, email, password, role, phone, date_of_birth})
    }  
    else{
      if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      
      {
        setSigninErrorEmail(true)
      setSigninErrorPassword(false)
      }
      else
      {
        setSigninErrorPassword(true)
        setSigninErrorEmail(false)

      }
    
    }

  }
  const isSamePassword = () => {
    return password === password2
  }
  // @ts-ignore 
  const handlePassword = (e: FocusEvent<HTMLInputElement>) => {
    const password2 = e.target ? (e.target as HTMLInputElement).value : '';
    console.log(password2)
  }

 return (
  <div className={Styles.PasEncoreClient}>
    <h1>Pas encore client ?</h1>
  
    {SigninErrorEmail || SigninErrorPassword ? <h2 className={Styles.TitreError}>Champs incorrects</h2> : ""}

 
    <Box sx={{p: 2}} className={SigninErrorEmail? Styles.errorEmail: ''}>
      <InputLabel htmlFor="email-signin">Email address</InputLabel>
      <Input id="email-signin" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setEmail(event.currentTarget.value)}/>
    </Box>

    <Box sx={{p: 2}}>
      <InputLabel htmlFor="password-signin">Password</InputLabel>
      <Input id="password-signin" aria-describedby="my-helper-text" type="password" onKeyUp={(event)=>setPassword(event.currentTarget.value)}/>
    </Box>

    <Box sx={{p: 2}} className={SigninErrorPassword? Styles.errorPassword: ''}>
      <InputLabel htmlFor="password-signin2">Retaper votre Password</InputLabel>
      <Input id="password-signin2" aria-describedby="my-helper-text" type="password" onKeyUp={(event)=>setPassword2(event.currentTarget.value)} onBlur={handlePassword}/>
    </Box>
 

    <Box sx={{p: 2}}>
      <Button variant="outlined" onClick={handleSignInForm} >Creer un compte</Button>
    </Box>
      
  </div>

 )
}
export default SignIn