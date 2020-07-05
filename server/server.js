const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const request = require("superagent");
const cors = require("cors");
const pug = require("pug");
const fetch = require("node-fetch");

const app = express();

app.set("view engine", "pug");

app.use(morgan("combined"));
app.use(helmet());
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.get("/:product_id", async (req, res) => {
  const { product_id } = req.params;
  // let response = await fetch(
  //   "http://ec2-54-224-38-115.compute-1.amazonaws.com:5150/public/bundle.js"
  // );
  // let script = await response.text();

  res.status(200).render("index", {
    location: "http://ec2-54-224-38-115.compute-1.amazonaws.com:5150/bundle/",
  });
});

module.exports = app;
