const dotenv = require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 8080;
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require("os");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer().any());
app.use(cors()); //enable cores

// adding mongo connection
require("./config/dbCon")(app);

const numCpu = os.cpus().length;
// cluster integration
app.get("/", (req, res) => {
  res.send(`OKkkkk--- ${process.pid}`);
  cluster.worker.kill();
});

var routes = require("./routes");
app.use("/", routes);
// creating server
var server = http.createServer(app);

// server.listen(port, () => {
//   console.log(`Server is listening on port => ${port}`);
// });

if (cluster.isMaster) {
  for (let index = 0; index < numCpu; index++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  server.listen(port, () => {
    console.log(`Server is listening pid ${process.pid} on port => ${port}`);
  });
}
