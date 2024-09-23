const chalk = require('chalk')
const fs = require('fs')
const notes = require('./notes');

const Mynotes = notes();
console.log(Mynotes)
const word = process.argv[2]

if (word==='add') {
    console.log('Adding a new note...')
} else if (word==='remove') {
    console.log('Removing a note...')
}

console.log(chalk.blue.inverse.bold('Success..'))

