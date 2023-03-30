import { Box, Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import AddProduct from '../components/admin/AddProduct'
import UpdateProduct from '../components/admin/UpdateProduct'
import DashBoard from '../components/admin/DashBoard'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


enum Action {
  ADD_PRODUCT = 'add',
  UPDATE_PRODUCT = 'update',
  DASHBOARD = 'dashboard'
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


const AdminPage = () => {
  const [action, setAction] = useState('')



  return ( 
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <ButtonGroup>
        <Button onClick={() => setAction(Action.ADD_PRODUCT)} >Ajouter un produit</Button>
        <Button onClick={() => setAction(Action.UPDATE_PRODUCT)} >Modifier un produit</Button>
        <Button onClick={() => setAction(Action.DASHBOARD)} >Accéder au dashboard</Button>
      </ButtonGroup>
      {action === Action.ADD_PRODUCT && <AddProduct />}
      {action === Action.UPDATE_PRODUCT && <UpdateProduct />}
      {action === Action.DASHBOARD && <DashBoard />}
    </Box>
  )
}
export default AdminPage