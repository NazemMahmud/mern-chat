import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from 'cors';
import { Server } from "socket.io";
import { keyvCache } from "./src/utilities/cache.js";

import MongoDBConnect from "./src/config/mongodb.connect.js"; // db config
import Router from "./src/routes/index.js";

const app = express();

// middlewares
app.use(bodyParser.json());

// cors middleware
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
}
app.use(cors(corsOptions));

// api routes
Router(app);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://talkhouse-tv.netlify.app"],
        methods: ["GET", "POST"],
    },
});
// const io = socket(server);
io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('message', (msg) => {
        console.log(`Received message: ${msg}`);
    });
});

server.listen(5000, () => {
    console.log(`SERVER STARTED ON 5000.....!`);
});

export {app, keyvCache };
