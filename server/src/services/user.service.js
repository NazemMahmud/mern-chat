import { User } from "../models/user/user.data.js";

const Model = User;

/**
 * Get all users
 */
export const getAll = async () => {
    return Model.getAll();
}
