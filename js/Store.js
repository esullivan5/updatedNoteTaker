//dependencies
const fs = require("fs");
//helper function
const util = require("util");

//reading from db.json

//make Notes class
//constructor
//read and write from file
const readFileAsync = util.promisify(fs.readFile);


class Store {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  saveNote(newNote) {
    return readFileAsync(`${process.cwd()}/db/db.json`, "utf8", (err, data) => {
      //TODO THROWING ERROR
      if (err) throw err;

      //get saved notes
      //TRIED making notes into array and pushing to that
      let notes = [];
      notes.push(data);
      console.log(notes);

      //give new note id
      //TODO id is always 1
      let id = notes.length++;
      newNote.id = id;

      //stringify new note
      let stringyNote = JSON.stringify(newNote);

      //TODO NOT WORKING add new note to saved notes
      notes.push(stringyNote);

      //stringify
      //write notes to db.json
      fs.writeFile(`${process.cwd()}/db/db.json`, notes, (err) => {
        if (err) throw err;
        //TODO NOT SAVING
        console.log("file saved!");
      });
    });
  }

  listNote() {
    //WORKING
    console.log("listNote called");
    //read db file
    return readFileAsync(`${process.cwd()}/db/db.json`, "utf8", function (err, data) {
        if (err) throw err;
        //TODO 
        console.log(notes);
    });
  }

  deleteNote() {
    
  }
}

module.exports = Store;