import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useState } from 'react'
import { IUser } from '../../types/user'
import Styles from './SignIn.module.css'

type Props = {
  onSignInFull: any
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


const SignInFull = ({onSignInFull}:Props)=> {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [bill_address, setBill_address] = useState('')
  const [delivery_address, setDelivery_address] = useState('')
  const [phone, setPhone] = useState('')
  const [date_of_birth, setDate_of_birth] = useState('')

  const handleSignInFullForm = () => {

    

    if (isNotEmpty(firstname) && isNotEmpty(lastname) && isNotEmpty(delivery_address) && isNotEmpty(phone) && isNotEmpty(date_of_birth)) {

      onSignInFull({firstname, lastname, bill_address, delivery_address, phone, date_of_birth})
      
    }  
  }

  const isNotEmpty = (value: string): boolean => value !== "" ?? false


 return (
  <>
  <h2>Informations complémentaires </h2>
  
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="firstname-signin">Prenom</InputLabel>
      <Input id="firstname-signin" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setFirstname(event.currentTarget.value)}/>
    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="lastname-signin">Nom</InputLabel>
      <Input id="lastname-signin" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setLastname(event.currentTarget.value)}/>
    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="adress-signin">Adresse de livraison</InputLabel>
      <Input id="adress-signin" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setDelivery_address(event.currentTarget.value)}/>
    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="adress2-signin">Adresse de facturation</InputLabel>
      <Input id="adress2-signin" aria-describedby="my-helper-text" type="text" onKeyUp={(event)=>setBill_address(event.currentTarget.value)}/>
    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="phone-signin">Numéro de telephone</InputLabel>
      <Input id="phone-signin" aria-describedby="my-helper-text" type="phone" onKeyUp={(event)=>setPhone(event.currentTarget.value)}/>
    </Box>
    <Box sx={{p: 2}}>
      <InputLabel htmlFor="date_of_birth-signin">Date de naissance</InputLabel>
      <Input id="date_of_birth-signin" aria-describedby="my-helper-text" type="date" onChange={(event)=>setDate_of_birth(event.currentTarget.value)}/>
    </Box>


    <Box sx={{p: 2}}>
      <Button variant="outlined" onClick={handleSignInFullForm} >Creer un compte</Button>
    </Box>
      
  </>

 )
}
export default SignInFull