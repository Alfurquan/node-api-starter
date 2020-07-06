const error = require("../middleware/error");

const express = require("express");

module.exports = function (app) {
  app.use(express.static("public"));
  app.use(express.json());

  //Register all your route handlers here

  app.use(error);
};
