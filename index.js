import express from "express";

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
app.use(betweenHome); // 전역으로 전체 route에서 적용.
// app.get("/", betweenHome, handleHome); // 필요한 routes에서 선택적으로 적용.

// routes
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
