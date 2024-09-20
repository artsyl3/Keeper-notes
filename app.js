const validator = require("validator")
const fs = require('fs')
const notes = require('./notes');


const Mynotes = notes();
//fs.writeFileSync('note.txt' , 'I lodadadddd js')
console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview'));