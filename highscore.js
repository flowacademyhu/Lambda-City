const readLine = require('readline-sync'); // Nem fogja megtalálni, telepítsük NPM-el!
const fs = require('fs');
const word = readLine.question('Hogy hívnak bajnok?'); // Ez kiírja konzolra a megadott
const points = 69;
// // szöveget, és egy enter leütéséig beolvassa az adatokat, majd letárolja
// // változóban.
// const point = readLine.question('Mennyi pontod lett?');

// fájlbaírás függvénye!
const highscore = (name, points) => {
  fs.appendFileSync('message.txt', `\n${name}  :  ${points} pont`);
};

// játékos név beírása scoreboardra!
highscore(word, points);

// scoreboard kiírása!

const array = fs.readFileSync('message.txt').toString().split('\n');

for (let i = 0; i < array.length; i++) {
  if (i < 5) {
    console.log(array[i]);
  }
}

module.exports = {
  highscore
};
