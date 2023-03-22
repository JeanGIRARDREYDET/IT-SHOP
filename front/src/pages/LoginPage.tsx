import { Box } from '@mui/material'
import Login from '../components/login/Login'
const LoginPage = () => {
  return (
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Login />
    </Box>
    
  )
}
export default LoginPage