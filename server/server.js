const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const request = require("superagent");

const app = express();

app.use(morgan("combined"));
app.use(helmet());

app.get("/:product_id", async (req, res) => {
  const { product_id } = req.params;
  const descHost = "http://ec2-54-224-38-115.compute-1.amazonaws.com:5150/";
  let desc = await http.get(descOptions);

  res.status(200).send(desc);
});

module.exports = app;
