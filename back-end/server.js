const express = require("express");
const mainRouter = require("./routes/main-route");
const cors = require("cors");
const socketio = require("socket.io");
require("dotenv").config();

const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = 5000 || process.env.PORT;
const server = app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);
const io = socketio(server);
io.on("connection", (socket) => {
  const username = socket.handshake.query.username;
  socket.join(username);
  });
