/** Get bearer access token from request header */
import {handleError} from "./index.js";
import {UnAuthorized} from "../utilities/error-generate.js";

const getToken = req => {
    let token = req.headers.authorization;
    return (token && token.startsWith('Bearer ')) ? token.slice(7, token.length) : '';
}

/** Check user is authenticated or not **/
const authenticated = (req, res, next) => {
    if ( getToken(req) ) {
        //token = token.slice(7, token.length);
    } else {
        const error = new UnAuthorized(' Invalid token');
        return handleError(error, req, res, next);
    }
}

export { authenticated };
