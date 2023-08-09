import express from "express";
import { config } from "dotenv";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors"

config({
    path: "./config/config.env"
});

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

import user from "./routes/userRouter.js"
app.use("/api/v1", user);


export default app;

app.use(errorHandlerMiddleware);