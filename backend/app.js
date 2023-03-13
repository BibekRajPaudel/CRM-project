const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error");
cors = require("cors");
const path = require("path");

app.use(cors());

app.use(express.json());

//Route Imports
const user = require("./routes/userRoutes");
const counseller = require("./routes/counsellerRoutes");

app.get("/", (req, res, next) => {
  res.send("Server started !!!!!!!!!!");
});

app.use("/api/v1", user);
app.use("/api/v1", counseller);

app.use("/backend/images",express.static('backend/images'));


app.use(errorMiddleWare);

module.exports = app;
