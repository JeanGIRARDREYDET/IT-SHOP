import { Box } from '@mui/material'
import { useState } from 'react'
import Login from '../components/login/Login'
import SignIn from '../components/signin/SignIn'
import SignInFull from '../components/signInFull/SignInFull'
import useFetch from '../hooks/useFetch2'
import { useNavigate } from 'react-router-dom';


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


 
const LoginPage = () => {
    const navigate = useNavigate();


  const [isCreated, setIsCreated] = useState(false);
  const [isFullCreated, setIsFullCreated] = useState(false);
  const [credentials, setCredentials] = useState<ISignIn | null>(null);

  const handleLogin = (credentials: ILogin) => {
    isUserInDatabase(credentials)
  }
  const isUserInDatabase = (credentials: ILogin) => {
    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(credentials)};
     fetch("http://localhost:3000/api/auth/login",requestOptions).then(res=> {
      
      if(res.ok){

        navigate("/products")
        alert("bienvue !")

      }
  
    }
      )
    // (async () => {
    //   const {error, data } = await useFetch<IUser>(`http://localhost:3000/api/login`, requestOptions)
    //   console.log(data)
    //   console.log(error)
    //   // console.log(isLoading)
    // })()
 
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

    fetch("http://localhost:3000/api/users/add", requestOptions)
    
    .then(res=>{

        if(res.ok){

          setIsFullCreated(true)
          alert("Vous êtes bien enregistré !")

        }

        }
    
    )

  }


  return ( 
    <Box sx={{p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <Login onLogin={handleLogin}/>
      {
        !isFullCreated ? (

          <>

        {!isCreated && ( <SignIn onSignIn={handleSignIn} /> )}
        {isCreated && ( <SignInFull onSignInFull={handleSignInFull} /> )}
        </>
        
        ) :""


      }
    </Box>

  )
}
export default LoginPage