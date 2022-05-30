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
app.get("/LowTop", (req, res) => {
  res.status(200).json(data.filter((item) => item.loai_giay === "LowTop"));
});
app.get("/HighTop", (req, res) => {
  res.status(200).json(data.filter((item) => item.loai_giay === "HighTop"));
});
app.get("/PlatForms", (req, res) => {
  res.status(200).json(data.filter((item) => item.platform === "true"));
});
app.get("/All", (req, res) => {
  res.status(200).send(data);
});
// app.get("/Converse/HighTop", (req, res) => {
//   res.status(200).send(data.);
// });

server.listen(port, () => console.log(`listening on port ${port}`));
