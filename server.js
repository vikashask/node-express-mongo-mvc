const dotenv = require('dotenv').config({path:'./.env'})
const port = process.env.PORT || 8080;
const express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app  = express();
const cors = require('cors');
const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer().any());
app.use(cors()); //CoRS


var server  = http.createServer(app);

server.listen(port, () => { console.log(`Server is listening on port => ${port}`); })