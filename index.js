const express = require("express");
const config = require("config");
const app = express();
require("./startup/routes")(app);
require("./startup/prod")(app);
require("./startup/db");
require("./startup/logging");

const port = process.env.PORT || config.get("port");

app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
