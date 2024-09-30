const fs = require('fs');

const getNotes = function ( ) {
    return ("your notes...")
}

const addNote = function (title, body) {
    const notes = loadNotes();
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes);
}

const saveNotes = function (notes) {
    const JsonNOtes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonNotes);
}    

const loadNotes = function ( ) {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const data = JSON.parse(dataBuffer.toString());
    return data;
    } catch (error) {
        return [];  
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}