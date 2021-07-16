const readLine = require('readline-sync');
const fs = require('fs');
const word = readLine.question('Hogy hívnak bajnok?'); // GAME OVER ESETÉN ELŐHÍVANDÓ!!!!
const points = 69; // PONTOK TÁROLÁSA, VÁLTOZÓBA ADÁS GAME OVER ESETÉN!!!!!!

// fájlbaírás függvénye!

const highscore = (name, points) => {
  fs.appendFileSync('message.txt', `\n${name}  :  ${points} pont `);
};

// játékos név beírása scoreboardra!
highscore(word, points);

// scoreboard utoljára beírt 5 elem tömbbe írása!!!

const array = fs.readFileSync('message.txt').toString().split('\n');
const tomb = [];
for (let i = array.length - 1; i >= 0; i--) {
  tomb.push(array[i]);
}
// SCOREBOARD KIÍRÁS
console.log(tomb.slice(0, 5).join('\r\n'));

module.exports = {
  highscore
};
