const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const loginRoute = require("./router/loginRoute");
const connectDb = require("./config/connect");

connectDb();
app.use(cors());
app.use(express.json());

app.use("/", loginRoute);

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);