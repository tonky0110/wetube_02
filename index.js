const express = require("express");
const app = express();

const PORT = 4000;
const handleListening = () => {
  console.log(`Listening in port on: http://localhost:${PORT}.`);
};

app.listen(PORT, handleListening);
