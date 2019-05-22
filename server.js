const dotenv = require('dotenv').config({path:'./.env'})
const port = process.env.PORT || 8080;
const express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var server  = http.createServer(app);
server.listen(port, () => { console.log(`Server is listening on port => ${port}`); })

