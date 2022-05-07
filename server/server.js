import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import MongoDBConnect from "./src/config/mongodb.connect.js"; // db config

const app = express();


const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Spp listening on port ${port}`)
})
