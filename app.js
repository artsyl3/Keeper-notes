const fs = require('fs')
//fs.writeFileSync('note.txt' , 'I lodadadddd js')
fs.appendFile('note.txt', "I add you", (err) => {
    if (err) {
      console.error('Failed to append data:', err);
    } else {
      console.log('Data successfully appended.');
    }
  });