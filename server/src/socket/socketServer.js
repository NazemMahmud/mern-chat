import { Server } from "socket.io";
import { CLIENT_URL_DEV } from "../config/env.config.js";


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
    });

};

export { createSocketServer };
