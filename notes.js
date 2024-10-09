const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}