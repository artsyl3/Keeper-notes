const fs = require('fs');

// // const book = {
// //     title : '1984',
// //     author : 'George Orwell',
// //     year : 1949
// // }

// // const bookJson = JSON.stringify(book);

//fs.writeFileSync('1-bookJason.json', bookJson);
const dataBufferr = fs.readFileSync('1-bookJason.json');
const data = JSON.parse(dataBufferr.toString());

data.name = 'Voldmort';
data.planet = 'F-35';
data.age = 300;

console.log(data);

const jsonData = JSON.stringify(data);
fs.writeFileSync('1-bookJason.json', jsonData);
// const jsonData = dataBuffer.toString();
// const data = JSON.parse(jsonData);

// console.log(data.title);

