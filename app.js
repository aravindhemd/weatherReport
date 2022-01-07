const express = require("express");
const bodyparser = require("body-parser");
const wether_report = require("./api/routes/wether")

const app = express();
app.use(bodyparser.json());

app.use('/api/wether',wether_report)

module.exports = app;