// var obj = {
//     name : 'Sajid'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Sajid", "age": 24}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var orginalNote = {
    title: 'Mohammad Sajid Ansari',
    body: 'My Name is Mohammad Sajid Ansari'
}

var originalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);