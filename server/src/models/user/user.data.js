import { UserModel } from "./user.schema.js";

/**
 * get single data based on condition
 * @param condition
 * @returns {Promise<Query<any, any, {}, any>>}
 */
const getOne = async condition => {
    return UserModel.findOne(condition);
}

const createNew = async data => {
    const model = new UserModel(data);
    return model.save();
}

const getAll = async () => {
    return UserModel.find({});
}

const getUsersNotLoggedIn = async loggedInUserId => {
    return UserModel.find({
        _id: {
            $ne: loggedInUserId
        }} ).select("_id name").lean();
}

export const User = {
    model: UserModel,
    getOne,
    createNew,
    getAll,
    getUsersNotLoggedIn
}
