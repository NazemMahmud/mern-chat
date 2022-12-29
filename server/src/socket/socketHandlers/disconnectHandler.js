import { removeConnectedUser, getOnlineUsers } from "../connectedUsers.js";

const disconnectHandler = (socket, io) => {
    removeConnectedUser({ socketId: socket.id });

    io.emit("online-users", getOnlineUsers());
};


export default disconnectHandler;
