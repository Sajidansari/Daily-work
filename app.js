/**
 * Created by lcom25 on 3/4/18.
 */
console.log('Starting app.js !');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Sajid', 'Sajid ansari', 2 , 54, 1 , 2 ,1])

console.log(filteredArray);


console.log(_.isString(true));
console.log(_.isString('12 asdda'));

var user = os.userInfo();
fs.appendFile('greeting.txt', `Hello ${user.username} You are ${notes.age}!`,function (err) {
    if(err){
        console.log('Unable to Write to File');
    }
});

var res = notes.addNote(24,-2);
console.log(res);

console.log('Results: ',notes.addNote(501,151));