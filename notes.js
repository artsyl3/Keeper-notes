const fs = require('fs');

const getNotes = function ( ) {
    return ("your notes...")
}

const addNote = function (title, body) {
    const notes = loadNotes();
    
    const dupplicateNotes = notes.filter(function (note) {
        return note.title === title,
    })

    if (dupplicateNotes.lenght === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(`Note "${title}" added successfully!`)
    }
    else {
        console.log(`Note "${title}" already exists!`)
    }

    w
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