const { printMap } = require('./map');
// lövés folyamata
const fireMissile = (arr, emptyField, tank, enemies) => {
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
      if (
        arr[missilePosX][tank.missilePosY] === '^' ||
        arr[missilePosX][tank.missilePosY] === 'v' ||
        arr[missilePosX][tank.missilePosY] === '<' ||
        arr[missilePosX][tank.missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          arr[missilePosX][tank.missilePosY] = emptyField;
          console.log(found);
        }
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
      printMap(arr);
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
      if (
        arr[missilePosX][tank.missilePosY] === '^' ||
        arr[missilePosX][tank.missilePosY] === 'v' ||
        arr[missilePosX][tank.missilePosY] === '<' ||
        arr[missilePosX][tank.missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          arr[missilePosX][tank.missilePosY] = emptyField;
          console.log(found);
        }
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
      printMap(arr);
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
      if (
        arr[tank.missilePosX][missilePosY] === '^' ||
        arr[tank.missilePosX][missilePosY] === 'v' ||
        arr[tank.missilePosX][missilePosY] === '<' ||
        arr[tank.missilePosX][missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          arr[tank.missilePosX][missilePosY] = emptyField;
          console.log(found);
        }
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
      printMap(arr);
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
      if (
        arr[tank.missilePosX][missilePosY] === '^' ||
        arr[tank.missilePosX][missilePosY] === 'v' ||
        arr[tank.missilePosX][missilePosY] === '<' ||
        arr[tank.missilePosX][missilePosY] === '>'
      ) {
        if (found && tank.isPlayer) {
          found.status = 'dead';
          arr[tank.missilePosX][missilePosY] = emptyField;
          console.log(found);
        }
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
      printMap(arr);
    }, 60);
  }
};
module.exports = {
  fireMissile
};
