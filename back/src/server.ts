/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
// import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
// import logger from 'jet-logger';

import 'express-async-errors';

import BaseRouter from '@src/routes/api';
import Paths from '@src/routes/constants/Paths';

import EnvVars from '@src/constants/EnvVars';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import { NodeEnvs } from '@src/constants/misc';
import { RouteError } from '@src/other/classes';
import mongoConnection from './repos/mongo-connect';




// **** Variables **** //

const app = express();

// ***** Types ****** //


// **** Setup **** //
app.set('view engine', 'pug');
// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(EnvVars.CookieProps.Secret));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev) {
  app.use(morgan('dev'));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  mongoConnection(EnvVars.PRE_MONGO_URL_MANUEL, EnvVars.POST_MONGO_URL_MANUEL, EnvVars.DATABASE);
}

// Security
// if (EnvVars.NodeEnv === NodeEnvs.Production) {
//   app.use(helmet());
// }

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// Add error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test) {
    // logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});


// ** Front-End Content ** //

// Set views directory (html)
const viewsDir = path.join(__dirname, 'views/pages');
app.set('views', viewsDir);

/**
 * CONNECT TO MONGODB VIA MONGOOSE
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

//set react views directory
// const reactViewsDir = path.join(__dirname, 'views/react');
// app.set('reactViews', reactViewsDir);

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Nav to login pg by default
app.get('/', (_: Request, res: Response) => {
  res.render('home', { title: 'Express Typescript App' });
});

app.get('/react/', (_: Request, res: Response) => {
  res.render('home', {} );
})

// Nav to login pg by default
app.get('/login', (_: Request, res: Response) => {
  res.sendFile('login.html', { root: viewsDir });
});

// Redirect to login if not logged in.
app.get('/users', (req: Request, res: Response) => {
  const jwt = req.signedCookies[EnvVars.CookieProps.Key];
  if (!jwt) {
    res.redirect('/');
  } else {
    res.sendFile('users.html', {root: viewsDir});
  }
});


// **** Export default **** //

export default app;
