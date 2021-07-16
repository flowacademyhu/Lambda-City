const { printMap } = require('./map');
const printColorMap = require('./colormap').printColorMap;
let highScore = 0;

const getHighScore = () => {
  return highScore;
};

// lövés folyamata
const fireMissile = (arr, emptyField, tank, enemies, player) => {
  tank.missilePosX = tank.posX;
  tank.missilePosY = tank.posY;

  if (tank.tankIcon === '^') {
    let missilePosX = tank.missilePosX - 1;
    const interval = setInterval(() => {
      const found = enemies.find(
        (enemy) => enemy.posX === missilePosX && enemy.posY === tank.missilePosY
      );
      if (arr[missilePosX + 1][tank.missilePosY] !== tank.tankIcon) {
        arr[missilePosX + 1][tank.missilePosY] = emptyField;
      }
      // eagle gets shot
      if (arr[missilePosX][tank.missilePosY] === 'E') {
        console.log('GAME OVER');
        process.exit();
      }
      // eagle gets shot
      if (
        arr[missilePosX][tank.missilePosY] === '^' ||
        arr[missilePosX][tank.missilePosY] === 'v' ||
        arr[missilePosX][tank.missilePosY] === '<' ||
        arr[missilePosX][tank.missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          highScore++;
          arr[missilePosX][tank.missilePosY] = emptyField;
        }
        // player gets shot
        if (player.posX === missilePosX && player.posY === tank.missilePosY) {
          player.life--;
          arr[missilePosX][tank.missilePosY] = emptyField;
          player.posX = player.spawnPointX;
          player.posY = player.spawnPointY;
          arr[player.spawnPointX][player.spawnPointY] = '^';
          if (player.life === 0) {
            console.log('YOU DIED');
            process.exit();
          }
        }
        // player gets shot
      }
      if (arr[missilePosX][tank.missilePosY] !== emptyField) {
        if (arr[missilePosX][tank.missilePosY] !== 'F') {
          arr[missilePosX][tank.missilePosY] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[missilePosX][tank.missilePosY] = tank.missileIcon;
      }
      missilePosX--;
      // printMap(arr, highScore);
      printColorMap(arr, enemies);
    }, 60);
  }

  if (tank.tankIcon === 'v') {
    let missilePosX = tank.missilePosX + 1;
    const interval = setInterval(() => {
      const found = enemies.find(
        (enemy) => enemy.posX === missilePosX && enemy.posY === tank.missilePosY
      );
      if (arr[missilePosX - 1][tank.missilePosY] !== tank.tankIcon) {
        arr[missilePosX - 1][tank.missilePosY] = emptyField;
      }
      // eagle gets shot
      if (arr[missilePosX][tank.missilePosY] === 'E') {
        console.log('GAME OVER');
        process.exit();
      }
      // eagle gets shot
      if (
        arr[missilePosX][tank.missilePosY] === '^' ||
        arr[missilePosX][tank.missilePosY] === 'v' ||
        arr[missilePosX][tank.missilePosY] === '<' ||
        arr[missilePosX][tank.missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          highScore++;
          arr[missilePosX][tank.missilePosY] = emptyField;
        }
        // player gets shot
        if (player.posX === missilePosX && player.posY === tank.missilePosY) {
          player.life--;
          arr[missilePosX][tank.missilePosY] = emptyField;
          player.posX = player.spawnPointX;
          player.posY = player.spawnPointY;
          arr[player.spawnPointX][player.spawnPointY] = '^';
          if (player.life === 0) {
            console.log('YOU DIED');
            process.exit();
          }
        }
        // player gets shot
      }
      if (arr[missilePosX][tank.missilePosY] !== emptyField) {
        if (arr[missilePosX][tank.missilePosY] !== 'F') {
          arr[missilePosX][tank.missilePosY] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[missilePosX][tank.missilePosY] = tank.missileIcon;
      }
      missilePosX++;
      printColorMap(arr, enemies);
    }, 60);
  }

  if (tank.tankIcon === '<') {
    let missilePosY = tank.missilePosY - 1;
    const interval = setInterval(() => {
      const found = enemies.find(
        (enemy) => enemy.posX === tank.missilePosX && enemy.posY === missilePosY
      );
      if (arr[tank.missilePosX][missilePosY + 1] !== tank.tankIcon) {
        arr[tank.missilePosX][missilePosY + 1] = emptyField;
      }
      // eagle gets shot
      if (arr[tank.missilePosX][missilePosY] === 'E') {
        console.log('GAME OVER');
        process.exit();
      }
      // eagle gets shot
      if (
        arr[tank.missilePosX][missilePosY] === '^' ||
        arr[tank.missilePosX][missilePosY] === 'v' ||
        arr[tank.missilePosX][missilePosY] === '<' ||
        arr[tank.missilePosX][missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          highScore++;
          arr[tank.missilePosX][missilePosY] = emptyField;
        }
        // player gets shot
        if (player.posX === tank.missilePosX && player.posY === missilePosY) {
          player.life--;
          arr[tank.missilePosX][missilePosY] = emptyField;
          player.posX = player.spawnPointX;
          player.posY = player.spawnPointY;
          arr[player.spawnPointX][player.spawnPointY] = '^';
          if (player.life === 0) {
            console.log('YOU DIED');
            process.exit();
          }
        }
        // player gets shot
      }
      if (arr[tank.missilePosX][missilePosY] !== emptyField) {
        if (arr[tank.missilePosX][missilePosY] !== 'F') {
          arr[tank.missilePosX][missilePosY] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[tank.missilePosX][missilePosY] = tank.missileIcon;
      }
      missilePosY--;
      printColorMap(arr, enemies);
    }, 60);
  }

  if (tank.tankIcon === '>') {
    let missilePosY = tank.missilePosY + 1;
    const interval = setInterval(() => {
      const found = enemies.find(
        (enemy) => enemy.posX === tank.missilePosX && enemy.posY === missilePosY
      );
      if (arr[tank.missilePosX][missilePosY - 1] !== tank.tankIcon) {
        arr[tank.missilePosX][missilePosY - 1] = emptyField;
      }
      // eagle gets shot
      if (arr[tank.missilePosX][missilePosY] === 'E') {
        console.log('GAME OVER');
        process.exit();
      }
      // eagle gets shot
      if (
        arr[tank.missilePosX][missilePosY] === '^' ||
        arr[tank.missilePosX][missilePosY] === 'v' ||
        arr[tank.missilePosX][missilePosY] === '<' ||
        arr[tank.missilePosX][missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          highScore++;
          arr[tank.missilePosX][missilePosY] = emptyField;
        }
        // player gets shot
        if (player.posX === tank.missilePosX && player.posY === missilePosY) {
          player.life--;
          arr[tank.missilePosX][missilePosY] = emptyField;
          player.posX = player.spawnPointX;
          player.posY = player.spawnPointY;
          arr[player.spawnPointX][player.spawnPointY] = '^';
          if (player.life === 0) {
            console.log('YOU DIED');
            process.exit();
          }
        }
        // player gets shot
      }
      if (arr[tank.missilePosX][missilePosY] !== emptyField) {
        if (arr[tank.missilePosX][missilePosY] !== 'F') {
          arr[tank.missilePosX][missilePosY] = emptyField;
        }
        clearInterval(interval);
      } else {
        arr[tank.missilePosX][missilePosY] = tank.missileIcon;
      }
      missilePosY++;
      printColorMap(arr, enemies);
    }, 60);
  }
};
module.exports = {
  fireMissile,
  getHighScore
};
