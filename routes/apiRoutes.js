//dependencies
const Store = require("../db/store.js");
//express handling routes
const router = require("express").Router();

//let data = require(`${process.cwd()}../db/db.json`);

  //routing
  // router.get("/notes", async function(req, res) {
  //   //return all saved notes as JSON
  //   //TODO set up store
  //   //call store
  //   const savedNotes = new Store().listNote();
  //   // let stringyNotes = JSON.stringify(notes);
    
  //   console.log(`Getting notes: ${savedNotes}`);
  //   var result = await (savedNotes)
  //   res.json(result);
  // })//add async to get res.json from above;

  router.get("/notes", function(req, res) {
    Store.listNote().then(notes => res.json(notes)).catch(error => res.status(500).json(error));
    
  });

  //TODO delete note
  router.delete("/notes/:id", function(req, res) {
    //TODO receive a query parameter containing id of note to delete
    //TODO read all notes from db.json file, remove the note with given id, reqrite the notes to db.json file
  });

module.exports = router;