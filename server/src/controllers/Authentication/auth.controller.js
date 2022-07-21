import {loginUser, createUser} from "../../services/auth.service.js";
import {generateToken} from "../../helpers/jwt.helper.js";
import {handleError} from "../../middlewares/index.js";
import {successResponse} from "../../helpers/httpResponse.helper.js";
import { calculateCacheTTL } from "../../utilities/cache.js";
import { keyvCache } from "../../../server.js";

/**
 * login a user
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const login = async (req, res) => {
    try {
        const response = await loginUser(req.body);
        response.data.accessToken = generateToken(response.data)
        successResponse(res, response)
    } catch (err) {
        handleError(err, req, res);
    }
}

/**
 * registration for a user
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const registration = async (req, res) => {
    // rememberMe: true
    try {
        const response = await createUser(req.body);
        successResponse(res, response, 201)
    } catch (err) {
        handleError(err, req, res);
    }
}

/**
 * logout a user
 * * insert the current token in block list, so that next time can't use this
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const logout = async (req, res) => {
    try {
        await keyvCache.set(req.token, req.token, calculateCacheTTL(req.user.exp));

        successResponse(res, {
            data: { message: 'Successfully logged out' }
        }, 200);
    } catch (err) {
        handleError(err, req, res);
    }
}

export { login, registration, logout }
