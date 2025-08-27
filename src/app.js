import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config({
    path: "./.env"
});

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json({limit: "1mb"}));
app.use(urlencoded({extended: true, limit: "1mb"}));
app.use(cookieParser());
app.use(express.static("public"));


//importing Routes
import userRoute from "./routes/user.routes.js";
import metreReadingsRoute from "./routes/reading.routes.js";

//User Route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/metre-reading", metreReadingsRoute);

export { app }