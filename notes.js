/**
 * Created by lcom25 on 3/4/18.
 */
console.log('Starting notes.js !');

var addNote = (title, body) => {
    console.log('Adding note ', title, body);
};

var getAll = () => {
    console.log('Getting all notes')
};

var getNotes = (title) => {
    console.log('Reading title', title);
}

var removeNote = () => {
    console.log('Deleting note');
}

module.exports = {
    addNote,
    getAll,
    getNotes,
    removeNote
};