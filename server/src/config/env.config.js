import dotenv from 'dotenv';

dotenv.config();

export const DB_CONNECT = process.env.SERVER_ENV === 'production' ? process.env.DB_CONNECT : process.env.DB_CONNECT_DEV;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const JWT_EXPIRES_IN= process.env.JWT_EXPIRES_IN;
export const PORT = process.env.PORT || 8088;
export const SOCKET_PORT = process.env.SOCKET_PORT || 5000;
export const CLIENT_URL_DEV = process.env.CLIENT_URL_DEV;
