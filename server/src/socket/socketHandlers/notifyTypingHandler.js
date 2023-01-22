import {getActiveConnections} from "../connectedUsers.js";

const notifyTypingHandler = (socket, io, data) => {
    const {receiverId, typing} = data;
    const activeConnections = getActiveConnections(receiverId.toString());

    activeConnections.forEach((socketId) => {
        io.to(socketId).emit("notify-typing", {
            senderId: socket.user.id,
            typing
        });
    });
}


export default notifyTypingHandler;
