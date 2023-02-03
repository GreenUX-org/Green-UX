const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { conn } = require("./db");
dotenv.config();
const app = express();
const bodyParser = require('body-parser')

const routesApp= require('./src/routes/app.routes')

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routesApp)

const PORT = process.env.PORT || 5000;
conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`running on port http://localhost:${PORT}`);
  });
});

module.exports = app;
