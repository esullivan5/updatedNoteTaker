

    function getNotes() {
        if(noteList.length !== 0) {
          $(".list-group").empty();
          noteList.forEach(newNote => {
            var div = $('<div>');
              div.text(newNote);
              console.log("get Notes", newNote);
              //$(".list-group").append(div)
          })
        }
      }
        //const currentURL = window.location.origin;
       //ajax call to get notes data
       //$.ajax({ url: currentURL + "/notes", method: "GET" })
          //.then(function(storedNotes) {
    //        //TODO PROBLEM returns entire notes.html instead of db objects
           // console.log(storedNotes);
  
    //       //make DOM elements
    //       var notesList = $(".list-group");
    //       var listItem = $(".list-group-item mt-4");
    //        listItem.append(storedNotes);
    //     //     $("<h2>").text(title),
    //     //   );
    //     //   notesList.append(listItem);
          //});
      //}
  
    // //get save btn
     const saveBtn = $(".save-note");
  
     var noteList = [];
    // //onclick, send to db
     saveBtn.on("click", function() {
        //ar noteList = []
       const newNote = {
         title: $(".note-title").val().trim(),
        content: $(".note-textarea").val().trim()
       };
       console.log(newNote);
       //var noteList = []
       noteList.push(newNote)
       console.log(noteList);
  
       displayNote(noteList);
  
      })
  
      function displayNote(noteList) {
      if(noteList.length !== 0) {
          $(".list-group").empty();
  
        noteList.forEach(newNote => {
          var div = $('<h4>');
          div.attr("class", "new-note");
          div.text(`Title: ${newNote.title}`)
          $(".list-group").append(div);
          var div2 = $('<div>');
          div2.attr("class", "note-text");
          div2.text(`Note:${newNote.content}`)
          $(".list-group").append(div2);
        })
      }
    }
  
    //   function displayNote(noteList) {
  
    //     noteList.forEach(newNote => {
    //     var div = $('<div>');
    //       div.attr("class", "new-note");
    //       div.text(`${newNote.Title}--${newNote.symbol}`)
    //       $(".list-group").append(div);
    //   })
    //   }
     function emptyFields() {
       document.getElementById("title").value = "";
       document.getElementById("content").value = "";
     }
     //  function renderNote() {
    //     if(noteList.length !== 0) {
    //       $(".list-group").empty();
    //       noteList.forEach(stock => {
    //         var div = $('<div>');
    //           div.text(newNote);
    //           console.log("render notes", newNote);
    //           $(".list-group").append(div)
    //       });
    //     }
    //   }
  
         //TODO get new note btn
      const newBtn = $(".new-note");
      newBtn.on("click", function() {
        emptyFields();
        getNotes();
        
      });
       
    //   noteList.forEach(newNote => {
    //     var div = $('');
    //       div.attr("class", "new-note");
    //       div.text(`${newNote.Title}--${newNote.symbol}`)
    //       $(".list-group").append(div);
    //   })
    //  }
  
    // // //TODO get new note btn
    //   const newBtn = $(".new-note");
    //   newBtn.on("click", function() {
    //     renderNote(noteList);
    //   });
  
     //on hover, change to hand cursor
     //newBtn.css('cursor','pointer');
  