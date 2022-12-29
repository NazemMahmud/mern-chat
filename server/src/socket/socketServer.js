import { Server } from "socket.io";
import { CLIENT_URL_DEV } from "../config/env.config.js";
import { checkAuth } from "../middlewares/socket.auth.middleware.js";
// socket handlers
import newConnectionHandler from "./socketHandlers/newConnectionHandler.js";
import disconnectHandler from "./socketHandlers/disconnectHandler.js";


const createSocketServer = (server) => {

    const io = new Server(server, {
        cors: {
            origin: [CLIENT_URL_DEV, "http://localhost:3001", "http://localhost:3002"],
            methods: ["GET", "POST"],
        },
    });

    io.use((socket, next) => {
        checkAuth(socket, next);
    });


    io.on('connection', (socket) => {
        console.log(`New socket connection connected: ${socket.id}`);

        // socket.on('message', (msg) => {
        //     console.log(`Received message: ${msg}`);
        // });

        // when new user is loggedin/active, new connection will be made and s/he will be an online user
        newConnectionHandler(socket, io);

        socket.on("disconnect", () => {
            console.log(`Connected socket disconnected: ${socket.id}`);
            disconnectHandler(socket, io);
        });
    });

};

export { createSocketServer };
