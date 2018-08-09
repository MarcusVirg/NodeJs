const fs = require('fs')

var fetchNotes = () => {
    try {
        var noteFile = fs.readFileSync('notes.json')
        return JSON.parse(noteFile)
    } catch (e) {
        console.log('No notes file exists, creating file...')
        fs.appendFileSync('notes.json')
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

var notesArray = fetchNotes()

var addNote = (title, body) => {
    var note = {
        title,
        body
    }
    var found = notesArray.find(note => note.title === title)
    if (found) {
        console.log('You have already made a note with the same title, please choose a different one.')
    } else {
        notesArray.push(note)
        saveNotes(notesArray)
        console.log('\nNote Added')
        printNote(note)
    }
}

var getAll = () => {
    notesArray.forEach(note => printNote(note))
}

var getNote = (noteTitle) => {
    var note = notesArray.find(note => note.title === noteTitle)
    if (note) {
        printNote(note)
    } else {
        console.log('\nNote does not exist\n')
    }
}

var removeNote = (noteTitle) => {
    var noteIndex = notesArray.findIndex(note => note.title === noteTitle)
    if (noteIndex) {
        console.log('Note Removed')
        printNote(notesArray[noteIndex])
        notesArray.splice(noteIndex, 1)
        saveNotes(notesArray)
    } else {
        console.log('Note does not exist')
    }
}

var printNote = (note) => {
    console.log(`\n----\nTitle: ${note.title}\nBody: ${note.body}\n`)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}