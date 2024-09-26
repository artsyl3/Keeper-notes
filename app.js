const chalk = require('chalk')
const fs = require('fs')
const notes = require('./notes');
const yargs = require('yargs');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Note added successfully!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Note removed successfully!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading note...')
    }
})
console.log(yargs.argv)

