/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */


export default {
  NodeEnv: (process.env.NODE_ENV ?? ''),
  Port: (process.env.PORT ?? 0),
  PRE_MONGO_URL_JEAN: (process.env.PRE_MONGO_URL_JEAN ?? ''),
  POST_MONGO_URL_JEAN: (process.env.POST_MONGO_URL_JEAN ?? ''),
  PRE_MONGO_URL_MANUEL: (process.env.PRE_MONGO_URL_MANUEL ?? ''),
  POST_MONGO_URL_MANUEL: (process.env.POST_MONGO_URL_MANUEL ?? ''),
  DATABASE: 'shop',
  CookieProps: {
    Key: 'token',
    Secret: (process.env.COOKIE_SECRET ?? ''),
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
      path: (process.env.COOKIE_PATH ?? ''),
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      domain: (process.env.COOKIE_DOMAIN ?? ''),
      secure: (process.env.SECURE_COOKIE === 'false'),
    },
  },
  Jwt: {
    Secret: (process.env.JWT_SECRET ??  ''),
    Exp: (process.env.COOKIE_EXP ?? ''), // exp at the same time as the cookie
  },
} as const;
