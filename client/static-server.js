const express = require("express");
const path = require('path');
const http = require('http');

const app = express();


app.use(express.static(path.join(__dirname, './build') ));


const server = new http.createServer(app);

server.listen(process.env.PORT) 