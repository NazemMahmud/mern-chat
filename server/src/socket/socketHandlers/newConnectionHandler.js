import { addNewConnectedUser, getOnlineUsers} from "../connectedUsers.js";

const newConnectionHandler = (socket, io) => {
    addNewConnectedUser({ socketId: socket.id, userId: socket.user.id });

    // emit online users to all connected users
    io.emit("online-users", getOnlineUsers());
};


export default newConnectionHandler;
