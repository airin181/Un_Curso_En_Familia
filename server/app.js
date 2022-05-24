require('dotenv').config();
<<<<<<< HEAD
=======

require('./utils/MongoDb');
>>>>>>> 7f83d66a8368e24b8386d139fbb2690650374060
const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

const router = require("./routes/routes-vincula");
const mongoDBConnection = require('./config/mongodbConfig');

const cors = require('cors');
const helmet = require('helmet');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "origin": "https://vincula-front.herokuapp.com/",
    "methods":"GET,POST,PUT,DELETE"
}));
app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
);
app.use("/", router);

const init = async () => {
  try {
      await mongoDBConnection();
      app.listen(port, () => {
          console.log(`App listening on port ${port}...`);
      })
  } 
  catch (error) {
      console.log(error);
  }
};
init();