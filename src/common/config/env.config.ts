import { config } from 'dotenv';

config();
export const EnvConfig = () => ({
  host: process.env.DB_HOST,
  port: parseInt(process.env.PORT_DB),
  database: process.env.DATABASE,
  usernameDb: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});