import {getAll} from "../services/user.service.js";
import {getLastConversationWithMessage} from "../services/conversations.service.js";
import {handleError} from "../middlewares/index.js";
import {successResponse} from "../helpers/httpResponse.helper.js";

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
};


/**
 * get all users (except logged in), with their last conversation message
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUsersWithLastConversationMessage = async (req, res) => {
    try {
        successResponse(res, {
            data:  await getLastConversationWithMessage(req.user.payload.id)
        })
    } catch (err) {
        handleError(err, req, res);
    }
};

export { getAllUsers, getUsersWithLastConversationMessage }
