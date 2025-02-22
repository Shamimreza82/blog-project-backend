import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export const envFile = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  data_base_url: process.env.DATABASE_URL,
  salt_round_pass: process.env.SALT_ROUND_PASS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  //   default_password: process.env.DEFAULT_PASS,

  //   jwt_refrishAccess_secret: process.env.JWT_REFRISHACCESS_SECRET,
  //   JWT_ACCESS_EXPIRE_IN: process.env.JWT_ACCESS_EXPIRE_IN,
  //   JWT_REFRESH_EXPIRE_IN: process.env.JWT_REFRESH_EXPIRE_IN,
};
