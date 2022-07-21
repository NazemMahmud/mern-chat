import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/env.config.js";

/**
 * create new jwt token
 */
export const generateToken = user => {
    return jwt.sign({
            payload: {
                id: user.id,
                email: user.email
            }
        },
        JWT_SECRET_KEY, {
            expiresIn: 86400
        });
};


/**
 * Verify JWT Token
 * @param token
 * @returns {*}
 */
export const verifyToken = token => {
    return jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return false;
        }
        return decoded;
    });
};

/**
 * get token from authorization header
 * @param req
 * @returns {string|string}
 */
export const getTokenFromHeader = req => {
    let token = req.headers.authorization;
    return (token && token.startsWith('Bearer ')) ? token.slice(7, token.length) : '';
};
