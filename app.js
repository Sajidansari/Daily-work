/**
 * Created by lcom25 on 3/4/18.
 */
console.log('Starting app.js !');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command =   argv._[0]
console.log("Command: ", command);
console.log("Yargs : ", argv);


if(command === 'add'){
    console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNotes(argv.title);
}else if(command === 'remove'){
    notes.removeNote();
}else{
    console.log('Command not recognise');
}