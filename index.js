const express = require("express");
const cors = require('cors');
// const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
// dotenv.config();

// Setup cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const route = require('./src/route/route');

// Allow CORS for HTTP verb
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use('/', route);

app.use((error, req, res, next) => {
    if (error !== null) {
      return res.status(400).json({
        "message": "Invalid JSON payload passed.",
        "status": "error",
        "data": null
      });
    }
    return next();
  });



  module.exports = app;