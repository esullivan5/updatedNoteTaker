//dependencies
const path = require("path");

module.exports = function(app) {
  //routing
  app.get("/notes", function(req, res) {
    //return notes.html
    res.sendFile(path.join(__dirname, "../notes.html"));
    console.log("getting notes.html");
  });

  app.get("*", function(req, res) {
    //return index.html
    res.sendFile(path.join(__dirname, "../index.html"));
    console.log("getting index.html");
  });
};