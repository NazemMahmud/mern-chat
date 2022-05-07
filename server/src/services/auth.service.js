import bcrypt from "bcryptjs";
import {User} from "../models/user/user.data.js";
import {NotFoundError, UnAuthorized} from "../utilities/error-generate.js";

const Model = User;

export const loginUser = async request => {
    const user = await Model.getOne({email: request.email});
    if(!user) {
        throw new NotFoundError("User not found");
    }
    // Password valid check
    const validPassword = await bcrypt.compare(request.password, user.password);
    if(!validPassword) {
        throw new UnAuthorized("Invalid Password");
    }

    return {
        data: {
            id: user._id,
            username: user.name,
            email: user.email
        }
    };
}
