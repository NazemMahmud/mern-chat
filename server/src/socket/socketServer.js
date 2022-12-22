import { Server } from "socket.io";
import { CLIENT_URL_DEV } from "../config/env.config.js";
import newConnectionHandler from "./socketHandlers/newConnectionHandler.js";


const createSocketServer = (server) => {

    const io = new Server(server, {
        cors: {
            origin: [CLIENT_URL_DEV, "http://localhost:3001", "http://localhost:3002"],
            methods: ["GET", "POST"],
        },
    });
    io.on('connection', (socket) => {
        console.log(`New socket connection connected: ${socket.id}`);

        socket.on('message', (msg) => {
            console.log(`Received message: ${msg}`);
        });

        // when new user is loggedin/active, new connection will be made and s/he will be an online user
        newConnectionHandler(socket, io);
    });

};

export { createSocketServer };
