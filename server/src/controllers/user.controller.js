import { getAll } from "../services/user.service.js";
import { handleError } from "../middlewares/index.js";
import { successResponse } from "../helpers/httpResponse.helper.js";

/**
 * get all users list for logged in user
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllUsers = async (req, res) => {
    try {
        successResponse(res, {
            data: await getAll()
        })
    } catch (err) {
        handleError(err, req, res);
    }
}

export { getAllUsers }
