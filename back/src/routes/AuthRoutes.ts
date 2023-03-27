import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import SessionUtil from '@src/util/SessionUtil';
import AuthService from '@src/services/AuthService';

import { IReq, IRes } from './types/express/misc';
import EnvVars from '@src/constants/EnvVars';
import jwt from 'jsonwebtoken';
// **** Types **** //

interface ILoginReq {
  email: string;
  password: string;
}
  

// **** Functions **** //

/**
 * Login a user.
 */
async function login(req: IReq<ILoginReq>, res: IRes) {
  const { email, password } = req.body;
  // Login
  const user = await AuthService.login(email, password);
  // Setup Admin Cookie

   const {response ,data} = await SessionUtil.addSessionData(res, {
    id: user._id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    date_of_birth: user.date_of_birth,
    role: user.role,
    bill_address : user.bill_address,
    delivery_address:user.delivery_address
  });
  // EnvVars.Jwt.Secret : Secret JWT du serveur.
  // EnvVars.Jwt.Exp :
  //let accessToken = jwt.sign({email: user.email, role: user.role}, EnvVars.Jwt.Secret , {expiresIn: EnvVars.Jwt.Exp});   
  
  // Return
 // return res.status(HttpStatusCodes.OK).end();
    
 return response.status(HttpStatusCodes.OK).send(data)
}

/**
 * Logout the user.
 */
function logout(_: IReq, res: IRes) {
  SessionUtil.clearCookie(res);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  login,
  logout,
} as const;
