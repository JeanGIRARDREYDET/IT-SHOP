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
import Cookies from 'js-cookie';



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
    // navigate('/')
  }
 
  function genererSessionId(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longueur = 20;
    let resultat = '';
    for (let i = 0; i < longueur; i++) {
      resultat += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultat;
  }


  const isUserInDatabase = (credentials: ILogin) => {
    const requestOptions = { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({email: credentials.email, password: credentials.password}),
      // credentials: 'include'
  };
 
 //  const [cookies, setCookie] = useCookies(['token']);
 //Cookies.set('nomDuCookie', 'valeurDuCookie');
    
    fetch(`${import.meta.env.VITE_API_URL}auth/login`, requestOptions)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(user=> {
     const {
      _id,
      firstname,
      lastname,
      bill_address,
      delivery_address,
      email,
      role,
      phone,
      date_of_birth,
      token
    } = user
    const userCookie = {
      _id,
      firstname,
      lastname,
      bill_address,
      delivery_address,
      email,
      role,
      phone,
      date_of_birth}
     Cookies.set('SESSION_COOKIE_NAME', genererSessionId(), { expires: 7, secure: true, sameSite: 'strict' }); //strict
     Cookies.set('user',JSON.stringify(userCookie), { expires: 7, secure: true, sameSite: 'strict' }); // strict
     Cookies.set('token',JSON.stringify(token), { expires: 7, secure: true, sameSite: 'strict' }); //strict
  
    
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
  

  //const cookies = new Cookies(request);
  // const valeurDuCookie = Cookies.get('token', { HttpOnlydd:true });



  //console.log("token http")
  //console.log(valeurDuCookie);
  //console.log(Cookies.get('nomDuCookie'))

  const handleSignInFull = (userInfos: IUser) => {
    const payload = {...userInfos,...credentials}
    const requestOptions = { method: 'POST',
     headers: { 'Content-Type': 'application/json', 'Authorization':'token'}, 
     body: JSON.stringify({user: payload})};
    fetch(`${import.meta.env.VITE_API_URL}/users/add`, requestOptions)
    .then(res=>{
        if(res.ok){
          setIsFullCreated(true)
          alert("Vous êtes bien enregistré !")
        }
    })
  }
  useEffect(() => {
    setIsUserLogged(Object.keys(user).length > 0)
  }, [user])
  return ( 
  
      <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
      {!isUserLogged? (<Login onLogin={handleLogin} />): (<UserInfos user={user} />)}
        {
        (!isUserLogged && !isFullCreated) ? (
          <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',flexDirection: "column"}}>
            {!isCreated && ( <SignIn onSignIn={handleSignIn} /> )}
            {isCreated && ( <SignInFull onSignInFull={handleSignInFull} /> )}
          </Box>
        ) :""
        }

      
    </Box>
  )
}
export default LoginPage