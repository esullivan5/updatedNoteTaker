//dependencies
const Store = require("../js/Store.js");
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
    //return all saved notes as JSON
    console.log(data);
    //TODO set up store
    //call store
    // const savedNotes = new Store().listNote();
    // const savedNotes = Store.listNote();
    // let stringyNotes = JSON.stringify(notes);
     console.log(savedNotes);sc
     console.log(`Getting notes: ${savedNotes}`);
    // res.json(savedNotes);
  })//add async to get res.json from above;

  //API POST requests
  router.post("/notes", function(req, res) {
    //TODO receive new note to save on the request body, add it to db.json, then return new note to client
    const newNote = req.body;

    new Store().saveNote(newNote);
    console.log(`getting new note: ${newNote}`);
    res.json(newNote);
  });

  //TODO delete note
  router.delete("/notes/:id", function(req, res) {
    //TODO receive a query parameter containing id of note to delete
    //TODO read all notes from db.json file, remove the note with given id, reqrite the notes to db.json file
  });

module.exports = router;