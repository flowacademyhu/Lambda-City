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
const obj = [];
fs.readFile('message.txt', 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  obj.push(data);
});

const result = Object.keys(obj)
  .slice(0, 6)
  .map((key) => ({ [key]: obj[key] }));

console.log(result);

module.exports = {
  highscore
};
