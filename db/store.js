//dependencies
const fs = require("fs");
//helper function
const util = require("util");



//reading from db.json

//make Notes class
//constructor
//read and write from file
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
  read(){
    return readFileAsync('db/db.json','utf8');
  }

  write(){
    return writeFileAsync('db/db.json','utf8');
  }


  saveNote(newNote) {
    const {title, text}= newNote;
    if (!title|| !title ){
      throw new Error("note title and text should not be blank");
    } 
    const addedNote= {title, text,id:uuidv1()}
    return this.listNote()
      .then(function(notes){
        return [...notes, addedNote]
      }).then(updatedNotes => this.write(updatedNotes))
      .then(() => addedNote);
  }

  listNote() {
   return this.read().then(function(notes){
     let parsedNotes;
     if(!Array.isArray(notes)){
       parsedNotes= [].concat(JSON.parse(notes));
     } else{
       parsedNotes= [];
     }
     return parsedNotes
   })
  }

  deleteNote() {
    
  }
}

module.exports = Store;