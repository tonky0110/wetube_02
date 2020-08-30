import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

// event handler
const handleHome = (req, res) => res.send("Hello from home.");
const handleProfile = (req, res) => res.send("You are on my profile.");

// middleware
const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

// express server default view engine setting
app.set("view engine", "pug");

// use middleware
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);
// app.get("/", betweenHome, handleHome); // 필요한 routes에서 선택적으로 적용.

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
