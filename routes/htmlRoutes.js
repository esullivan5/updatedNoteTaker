//dependencies
const path = require("path");
const router = require("express").Router();
module.exports = function(app) {
  //routing
  router.get("/notes", function(req, res) {
    //return notes.html
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log("getting notes.html");
  });

  router.get("*", function(req, res) {
    //return index.html
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log("getting index.html");
  });
};