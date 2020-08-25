import express from "express";

const app = express();

const PORT = 4000;
const handleListening = () => {
  console.log(`Listening in port on: http://localhost:${PORT}.`);
};

function handleHome(req, res) {
  console.log("req: ", req);
  res.send("Hello from home.");
}

function handleProfile(req, res) {
  console.log("req: ", req);
  res.send("You are on my profile.");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
