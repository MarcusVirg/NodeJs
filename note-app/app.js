const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'Add a new Note', {title: titleOptions, body: bodyOptions})
    .command('list', 'List all Notes')
    .command('read', 'Read a Note', {title: titleOptions})
    .command('remove', 'Remove a Note', {title: titleOptions})
    .help()
    .argv
var command = argv._[0]

if (command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized')
}