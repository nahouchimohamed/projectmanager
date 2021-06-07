import express, { response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/keys.js"
import passport from "passport";
import postRoutes from "./routes/api/USER.js";








//set up express

const app = express();

app.use(express.json({ limit: '50mb', extended: true }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }))
//port
app.use('', postRoutes);

const port = process.env.PORT || 5000;
//conncet 
mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB  connected"))
    .catch(error => console.log(error.message));
    app.listen(port, () => console.log(`listenning on localhost:${port}`));
app.get("/", (req, res) => res.status(200).send("hello"));
mongoose.set (`useFindAndModify`,false);

