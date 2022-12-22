import { addNewConnectedUser, getOnlineUsers} from "../connectedUsers.js";

const newConnectionHandler = (socket, io) => {
    // TODO: needs user id
    addNewConnectedUser({ socketId: socket.id, userId: 1 });

    // emit online users to all connected users
    io.emit("online-users", getOnlineUsers());
};


export default newConnectionHandler;
