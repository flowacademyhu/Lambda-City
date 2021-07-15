const enemies = require('./enemy').enemies;
const bulletout = {
  bullet: '*',
  posX: 0,
  posY: 0
};
const found = enemies.find(
  (enemy) => enemy.posX === bulletout.posX && enemy.posY === bulletout.posY
);
const fireBullet = (arr, player, printMap, emptyField, enemy) => {
  bulletout.posX = player.posX;
  bulletout.posY = player.posY;
  console.log(found);
  if (player.tank === '^') {
    let i = bulletout.posX - 1;
    const interval = setInterval(() => {
      if (arr[i + 1][bulletout.posY] !== player.tank) {
        arr[i + 1][bulletout.posY] = emptyField;
      }
      if (
        arr[i][bulletout.posY] === '^' ||
        arr[i][bulletout.posY] === 'v' ||
        arr[i][bulletout.posY] === '<' ||
        arr[i][bulletout.posY] === '>'
      ) {
        // const found = enemies.find(
        //   (enemy) => enemy.posX === i && enemy.posY === bulletout.posY
        // );
        if (found) {
          found.status = 'dead';
          arr[i][bulletout.posY] = emptyField;
          console.log(found);
        }
      }
      if (arr[i][bulletout.posY] !== emptyField) {
        if (arr[i][bulletout.posY] !== 'F') {
          arr[i][bulletout.posY] = emptyField;
        }

        clearInterval(interval);
      } else {
        arr[i][bulletout.posY] = bulletout.bullet;
        i--;
      }
      printMap(arr);
    }, 60);
  }

  if (player.tank === 'v') {
    let i = bulletout.posX + 1;
    const interval = setInterval(() => {
      if (arr[i - 1][bulletout.posY] !== player.tank) {
        arr[i - 1][bulletout.posY] = emptyField;
      }
      if (
        arr[i][bulletout.posY] === '^' ||
        arr[i][bulletout.posY] === 'v' ||
        arr[i][bulletout.posY] === '<' ||
        arr[i][bulletout.posY] === '>'
      ) {
        if (found) {
          found.status = 'dead';
          arr[i][bulletout.posY] = emptyField;
        }
      }
      if (arr[i][bulletout.posY] !== emptyField) {
        if (arr[i][bulletout.posY] !== 'F') {
          arr[i][bulletout.posY] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[i][bulletout.posY] = bulletout.bullet;
        i++;
      }
      printMap(arr);
    }, 60);
  }

  if (player.tank === '<') {
    let i = bulletout.posY - 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][i + 1] !== player.tank) {
        arr[bulletout.posX][i + 1] = emptyField;
      }
      if (
        arr[i][bulletout.posY] === '^' ||
        arr[i][bulletout.posY] === 'v' ||
        arr[i][bulletout.posY] === '<' ||
        arr[i][bulletout.posY] === '>'
      ) {
        // const found = enemies.find(
        //   (enemy) => enemy.posX === bulletout.posX && enemy.posY === i
        // );
        if (found) {
          found.status = 'dead';
          arr[bulletout.posX][i] = emptyField;
        }
      }
      if (arr[bulletout.posX][i] !== emptyField) {
        if (arr[bulletout.posX][i] !== 'F') {
          arr[bulletout.posX][i] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[bulletout.posX][i] = bulletout.bullet;
        i--;
      }
      printMap(arr);
    }, 60);
  }

  if (player.tank === '>') {
    let i = bulletout.posY + 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][i - 1] !== player.tank) {
        arr[bulletout.posX][i - 1] = emptyField;
      }
      if (
        arr[i][bulletout.posY] === '^' ||
        arr[i][bulletout.posY] === 'v' ||
        arr[i][bulletout.posY] === '<' ||
        arr[i][bulletout.posY] === '>'
      ) {
        // const found = enemies.find(
        //   (enemy) => enemy.posX === bulletout.posX && enemy.posY === i
        // );
        if (found) {
          found.status = 'dead';
          arr[bulletout.posX][i] = emptyField;
        }
      }
      if (arr[bulletout.posX][i] !== emptyField) {
        if (arr[bulletout.posX][i] !== 'F') {
          arr[bulletout.posX][i] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[bulletout.posX][i] = bulletout.bullet;
        i++;
      }
      printMap(arr);
    }, 60);
  }
};
module.exports = {
  fireBullet,
  found
};
