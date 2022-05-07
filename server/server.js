import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import MongoDBConnect from "./src/config/mongodb.connect.js"; // db config
import Router from "./src/routes/index.js";

const app = express();

const port = process.env.PORT || 8080

// middlewares
app.use(bodyParser.json());

// api routes
Router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
