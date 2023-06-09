
import { Router } from 'express';
import jetValidator from 'jet-validator';

import {guestMw, clientMw, adminMw} from './middleware/authMw';
import Paths from './constants/Paths';
import User from '@src/models/User';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import ProductRoutes from './ProductRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// **** Setup **** //

const authRouter = Router();

// Login user
authRouter.post(
  Paths.Auth.Login,
  
  // validate('email', 'password'),
  AuthRoutes.login,
);

// Logout user
authRouter.get(
  Paths.Auth.Logout,
  AuthRoutes.logout,
);

// Add AuthRouter
apiRouter.use(Paths.Auth.Base, authRouter);


// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);

// Add one user
userRouter.post(
  
  Paths.Users.Add,
  // validate(['user', User.IsUserObj]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  // validate(['user', User.IsUserObj]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);

// Add UserRouter

// adminMw,
apiRouter.use(Paths.Users.Base, userRouter);


//ADD PRODUCT ROUTER

const productRouter = Router();

productRouter.get(
  Paths.Products.Get,
  ProductRoutes.getAll,
);

productRouter.get(
  Paths.Products.GetOne,
  ProductRoutes.getOne,
);

// productRouter.get(
//   Paths.Products.getMany,
//   ProductRoutes.
// )

// productRouter.get(
//   Paths.Products.Migrate,
// );

productRouter.post(
  Paths.Products.Add,
  // adminMw,
  ProductRoutes.add, 
);

productRouter.put(
  Paths.Products.Update,
  // adminMw,
  ProductRoutes.update,
);

productRouter.delete(
  Paths.Products.Delete,
  // adminMw,
  ProductRoutes.delete,
);

apiRouter.use(Paths.Products.Base, productRouter);


// **** Export default **** //

export default apiRouter;
