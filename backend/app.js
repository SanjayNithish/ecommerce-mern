const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
const product = require("./routes/product");
const auth = require("./routes/auth");

app.use("/api/v1/", product);
app.use("/api/v1/", auth);

module.exports = app;
