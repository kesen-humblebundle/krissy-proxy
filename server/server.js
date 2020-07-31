const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const request = require("superagent");
const cors = require("cors");
const pug = require("pug");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set("view engine", "pug");

app.use(morgan("dev"));
//app.use(helmet());

app.use(helmet.noSniff());
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use("/static", express.static(path.resolve(__dirname, "../assets")));
app.set("views", path.resolve(__dirname, "../views"));

app.get("/:product_id", async (req, res) => {
  res.status(200).render("index", {
    descService: process.env.DESC_SERVICE,
    overviewService: process.env.OVERVIEW_SERVICE,
    traitsService: process.env.TRAITS_SERVICE,
    imageService: process.env.IMAGE_SERVICE,
    priceService: process.env.PRICE_SERVICE,
    relatedService: process.env.RELATED_SERVICE,
    otherPopService: process.env.OTHER_POP_SERVICE,
    legalService: process.env.LEGAL_SERVICE,
  });
});

app.get("/", (req, res) => {
  res.redirect("/21");
});

module.exports = app;
