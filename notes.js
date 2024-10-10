const fs = require('fs')
const chalk = require('chalk');

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(function (note) {
        return note.title === title
    })

    if (duplicateNote) {
        console.log('Note title taken!')
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }
}

const removeNote =  (title) => {
    const notes = loadNotes();
    const NotesToKeep = notes.filter(function(note){
        return note.title !== title;
    })
    saveNotes(NotesToKeep);
    if(NotesToKeep.length === notes.length){
        console.log(chalk.bgRed('Note not Found!'));
        return;
    }else{
        console.log(chalk.bgGreen('Note removed!'));
        return;
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(('Your list notes are:'))
    const ListToShow = notes.forEach(note => {
        console.log(note.title) ;
    });
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);

    if(noteToRead) {
        console.log(chalk.bgBlue('Tile of your note is : ' + noteToRead.title));
        console.log('Body of your note is : ' + noteToRead.body);
    }else{
        console.log(chalk.bgRed('Note not Found!'));
        return;
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}