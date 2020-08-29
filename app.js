import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";

const app = express();

// event handler
const handleHome = (req, res) => res.send("Hello from home.");
const handleProfile = (req, res) => res.send("You are on my profile.");

// middleware
const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

// use middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
// app.get("/", betweenHome, handleHome); // 필요한 routes에서 선택적으로 적용.

// routes
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
