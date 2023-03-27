import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Login from '../components/login/Login'
import SignIn from '../components/signin/SignIn'
import SignInFull from '../components/signInFull/SignInFull'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { CartConsumerHook } from '../context/CartContext'
import { ActionTypes } from '../stores/CartStore'
import UserInfos from '../components/userInfos/UserInfos'

type ILogin = {
  email: string,
  password: string
}
type ISignIn = {
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
  pwdHash: string
}

//config(); 

const LoginPage = () => {
  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);
  const [isFullCreated, setIsFullCreated] = useState(false);
  const [credentials, setCredentials] = useState<ISignIn | null>(null);
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [{user}, dispatch] = CartConsumerHook();

  const handleLogin = (credentials: ILogin) => {
    isUserInDatabase(credentials)
    navigate('/')
  }

  const isUserInDatabase = (credentials: ILogin) => {
    const requestOptions = { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    };
 
 //  const [cookies, setCookie] = useCookies(['token']);

    
    fetch(`${import.meta.env.VITE_API_URL}/auth/login`, requestOptions)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(user=> {
      setIsUserLogged(true)
      return dispatch({type: ActionTypes.SET_USER_SESSION, payload: user});
    })
    .catch(error => { console.error(error)})
 
  }
  
  const handleSignIn = (userCredentials: ILogin) => {
    if(userCredentials.email && userCredentials.password) {
      setIsCreated(true)
      setCredentials((credentials)=>({...credentials, email: userCredentials.email, password: userCredentials.password}))
    }
  }
  
  const handleSignInFull = (userInfos: IUser) => {
    const payload = {...userInfos,...credentials}
    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({user: payload})};
    fetch(`${import.meta.env.VITE_API_URL}/users/add`, requestOptions)
    .then(res=>{
        if(res.ok){
          setIsFullCreated(true)
          alert("Vous êtes bien enregistré !")
        }
    })
  }
  useEffect(() => {

  }, [user])
  return ( 
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      {!isUserLogged? <Login onLogin={handleLogin} />: <UserInfos user={user} />}
        {
        !isUserLogged && !isFullCreated ? (
          <>
            {!isCreated && ( <SignIn onSignIn={handleSignIn} /> )}
            {isCreated && ( <SignInFull onSignInFull={handleSignInFull} /> )}
          </>
        ) :""
        }
      </Box>

      
    </Box>
  )
}
export default LoginPage