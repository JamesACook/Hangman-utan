/*Converts the dictionary.txt file to an array and write it to wordList.js file.*/

const { readFileSync, writeFile } = require('fs');

const contents = readFileSync('./src/dictionary.txt', 'utf-8');
const arr = `const wordList =  ["${contents.split(/\r?\n/).join('"," ')}"] \n export default wordList`;

console.log(arr); 

writeFile('./src/wordList.js', arr, function (err) {
    if (err) throw err;
    console.log('Saved!');
});