import { handleError } from "./index.js";
import { UnAuthorized } from "../utilities/error-generate.js";
import { getTokenFromHeader, verifyToken } from "../helpers/jwt.helper.js";
import { keyvCache } from "../../server.js";


/**
 * Check user is authenticated or not
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
const authenticated =  async (req, res, next) => {
    try {
        const { decoded, token } = await getValidToken(getTokenFromHeader(req));
        req.user = decoded;
        req.token = token;
        return next();
    } catch (err) {
        return handleError(err, req, res, next);
    }
};

/**
 * get valid token
 * if: token not exist in header | token is in block list (already used before logout) | expired or invalid, return error
 *
 * @param token
 * @returns {Promise<{decoded: ({exp}|*), token: string}>}
 */
const getValidToken = async (token = '') => {
    if (!token) {
        throw new UnAuthorized(' Invalid token');
    }

    // exists in blockList
    if (await keyvCache.get(token)) {
        throw new UnAuthorized(' Invalid token');
    }

    const decoded = await verifyToken(token);
    if (!decoded || !decoded.exp) {
        throw new UnAuthorized(' Invalid token');
    }

    return { decoded, token };
};

export { authenticated };
