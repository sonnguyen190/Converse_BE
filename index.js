const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const port = process.env.PORT || 4000;
const data = require("./data/dataGiay.json");
const app = express();
app.use(cors());
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/Converse/HighTop", (req, res) => {
  res.status(200).json(data);
});
// app.get("/Converse/HighTop", (req, res) => {
//   res.status(200).send(data.);
// });

server.listen(port, () => console.log(`listening on port ${port}`));
