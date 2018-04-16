/**
 * Created by lcom25 on 3/4/18.
 */

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command =   argv._[0]

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created');
        notes.logNotes(note);
    }else{
        console.log(`Note title taken`);
    }

}else if(command === 'list'){
    var allNote = notes.getAll();
    console.log(`Printing ${allNote.length} note(s).`)
    allNote.forEach((note) => notes.logNotes(note));
}else if(command === 'read'){
    var note = notes.getNotes(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNotes(note);
    }else{
        console.log(`Note not found`);
    }

}else if(command === 'remove'){
    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'Note was removed' : 'Note not found';
    console.log("Message : ", message);
}else{
    console.log('Command not recognise');
}