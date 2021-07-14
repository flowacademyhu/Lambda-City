const readLine = require('readline-sync'); // Nem fogja megtalálni, telepítsük NPM-el!
const fs = require('fs');
const word = readLine.question('Hogy hívnak bajnok?'); // Ez kiírja konzolra a megadott
const points = 69;
// // szöveget, és egy enter leütéséig beolvassa az adatokat, majd letárolja
// // változóban.
// const point = readLine.question('Mennyi pontod lett?');

// fájlbaírás függvénye!

// fs.readFile("users.txt", (err, file) => {
//   if(file.length == 0){
//       console.log("file is empty")
//   }else{
//       console.log("file is not empty")
//   }
// })

const highscore = (name, points) => {
  fs.appendFileSync('message.txt', `\n${name}  :  ${points} pont `);
};

// játékos név beírása scoreboardra!
highscore(word, points);

// scoreboard kiírása!

const array = fs.readFileSync('message.txt').toString().split('\n');
const tomb = [];
for (let i = array.length - 1; i >= 0; i--) {
  tomb.push(array[i]);
}

console.log(tomb.slice(0, 5));

module.exports = {
  highscore
};
