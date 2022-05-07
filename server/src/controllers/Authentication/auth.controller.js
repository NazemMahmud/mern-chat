import {loginUser} from "../../services/auth.service.js";
import {generateToken} from "../../helpers/jwt.helper.js";
import {handleError} from "../../middlewares/index.js";
import {successResponse} from "../../helpers/httpResponse.helper.js";

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


export const AuthController = {login}
