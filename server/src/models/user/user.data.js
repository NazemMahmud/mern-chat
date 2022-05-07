import {UserModel} from "./user.schema.js";

/**
 * get single data based on condition
 * @param condition
 * @returns {Promise<Query<any, any, {}, any>>}
 */
const getOne = async condition => {
    return UserModel.findOne(condition);
}

export const User = {
    model: UserModel,
    getOne: getOne,
}
