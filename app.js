const chalk = require('chalk')
const fs = require('fs')
const notes = require('./notes');
const yargs = require('yargs');
const { DESTRUCTION } = require('dns');
const { title } = require('process');

yargs.version('1.1.1')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            type:'string',
            demandOption: true
        },
        body: {
            description: 'Note body',
            type:'string',
            demandOption: true
        }
    },
    handler: function (argv) {
        console.log("title: ", chalk.bold(argv.title) , "body: ", chalk.bold(argv.body));
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
yargs.parse();

