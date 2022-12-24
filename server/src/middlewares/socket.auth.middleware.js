import { verifyToken } from "../helpers/jwt.helper.js";
import { UnAuthorized } from "../utilities/error-generate.js";

const checkAuth = (socket, next) => {
    let token = socket.handshake.auth?.token

    if (!token) {
        return res.status(403).send(" A token is required");
    }

    try {
        const decoded = verifyToken(token);
        if (!decoded || !decoded.exp) {
            return res.status(403).send("Invalid token");
        }

        socket.user = decoded.payload;
    } catch (err) {
        const error = new UnAuthorized("Not authorized");
        return socket(error);
    }

    return next();
};

export { checkAuth };
