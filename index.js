import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;
const handleListening = () => {
  console.log(`Listening in port on: http://localhost:${PORT}.`);
};

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
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
