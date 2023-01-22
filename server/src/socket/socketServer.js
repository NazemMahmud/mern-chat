import { Server } from "socket.io";
import { CLIENT_URL_DEV } from "../config/env.config.js";
import { checkAuth } from "../middlewares/socket.auth.middleware.js";
// socket handlers
import newConnectionHandler from "./socketHandlers/newConnectionHandler.js";
import disconnectHandler from "./socketHandlers/disconnectHandler.js";
import directChatHistoryHandler from "./socketHandlers/directChatHistoryHandler.js";
import {setServerSocketInstance} from "./connectedUsers.js";
import {directMessageHandler} from "./socketHandlers/directMessageHandler.js";
import notifyTypingHandler from "./socketHandlers/notifyTypingHandler.js";


const createSocketServer = (server) => {

    const io = new Server(server, {
        cors: {
            origin: [CLIENT_URL_DEV, "http://localhost:3001", "http://localhost:3002"],
            methods: ["GET", "POST"],
        },
    });

    setServerSocketInstance(io);

    io.use((socket, next) => {
        checkAuth(socket, next);
    });


    io.on('connection', (socket) => {
        console.log(`New socket connection connected: ${socket.id}`);

        // when new user is loggedin/active, new connection will be made and s/he will be an online user
        newConnectionHandler(socket, io);

        socket.on("new-direct-message", (data) => {
            directMessageHandler(socket, data);
        });

        // for initial time
        socket.on("get-direct-chat-history", (data) => {
            directChatHistoryHandler(socket, data.receiverId);
        });

        socket.on("notify-typing", (data) => {
            notifyTypingHandler(socket, io, data);
        });

        socket.on("disconnect", () => {
            console.log(`Connected socket disconnected: ${socket.id}`);
            disconnectHandler(socket, io);
        });
    });

};

export { createSocketServer };
