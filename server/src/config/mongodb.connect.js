import mongoose from 'mongoose';
import {DB_CONNECT, DB_NAME} from "./env.config.js";


const MongoDBConnect = mongoose
    .connect(DB_CONNECT, {
        dbName: DB_NAME
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.")
    })
    .catch(err => {
        console.log('Could not connect to MongoDB');
        console.error(err);
    });

export default MongoDBConnect;
