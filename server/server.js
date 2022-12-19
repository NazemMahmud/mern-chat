import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from 'cors';
import { keyvCache } from "./src/utilities/cache.js";

import MongoDBConnect from "./src/config/mongodb.connect.js"; // db config
import Router from "./src/routes/index.js";
import { createSocketServer } from "./src/socket/socketServer.js";
import {CLIENT_URL_DEV, SOCKET_PORT } from "./src/config/env.config.js";

const app = express();

// middlewares
app.use(bodyParser.json());

// cors middleware
const corsOptions = {
    origin: [CLIENT_URL_DEV, "http://localhost:3001", "http://localhost:3002"],
}
app.use(cors(corsOptions));

// api routes
Router(app);

const server = http.createServer(app);
// socket connection
createSocketServer(server);

server.listen(SOCKET_PORT, () => {
    console.log(`SERVER STARTED ON ${SOCKET_PORT}.....!!`);
});

export { app, keyvCache };
