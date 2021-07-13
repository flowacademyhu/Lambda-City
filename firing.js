const bulletout = {
  bullet: '*',
  posX: 0,
  posY: 0
};

const fireBullet = (arr, printMap, emptyField, player, enemies) => {
  bulletout.posX = player.posX;
  bulletout.posY = player.posY;

  if (player.tank === '^') {
    let posX = bulletout.posX - 1;
    const interval = setInterval(() => {
      if (arr[posX][bulletout.posY] === 'F') {
        arr[posX + 1][bulletout.posY] = emptyField;
        printMap(arr);
        return arr;
      }
      if (arr[posX][bulletout.posY] === emptyField) {
        arr[posX][bulletout.posY] = bulletout.bullet;
        if (arr[posX + 1][bulletout.posY] !== player.tank) {
          arr[posX + 1][bulletout.posY] = emptyField;
        }
      } else if (arr[posX][bulletout.posY] !== emptyField) {
        arr[posX + 1][bulletout.posY] = emptyField;
        for (const enemy of enemies) {
          if (arr[posX][bulletout.posY] === arr[enemy.posX][enemy.posY]) {
            arr[posX][bulletout.posY] = emptyField;
            enemy.status = 'dead';
            enemy.posX = 0;
            enemy.posY = 0;
            clearInterval(interval);
            return arr;
          }
        }
      }
      printMap(arr);
      posX--;
    }, 120);
  }

  if (player.tank === 'v') {
    let posX = bulletout.posX + 1;
    const interval = setInterval(() => {
      if (arr[posX][bulletout.posY] === 'F') {
        arr[posX - 1][bulletout.posY] = emptyField;
        printMap(arr);
        return arr;
      }
      if (arr[posX][bulletout.posY] === emptyField) {
        arr[posX][bulletout.posY] = bulletout.bullet;
        if (arr[posX - 1][bulletout.posY] !== player.tank) {
          arr[posX - 1][bulletout.posY] = emptyField;
        }
      } else if (arr[posX][bulletout.posY] !== emptyField) {
        arr[posX - 1][bulletout.posY] = emptyField;
        for (const enemy of enemies) {
          if (arr[posX][bulletout.posY] === arr[enemy.posX][enemy.posY]) {
            arr[posX][bulletout.posY] = emptyField;
            enemy.status = 'dead';
            enemy.posX = 0;
            enemy.posY = 0;
            clearInterval(interval);
            return arr;
          }
        }
      }
      printMap(arr);
      posX++;
    }, 120);
  }

  if (player.tank === '<') {
    let posY = bulletout.posY - 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][posY] === 'F') {
        arr[bulletout.posX][posY + 1] = emptyField;
        printMap(arr);
        return arr;
      }
      if (arr[bulletout.posX][posY] === emptyField) {
        arr[bulletout.posX][posY] = bulletout.bullet;
        if (arr[bulletout.posX][posY + 1] !== player.tank) {
          arr[bulletout.posX][posY + 1] = emptyField;
        }
      } else if (arr[bulletout.posX][posY] !== emptyField) {
        arr[bulletout.posX][posY + 1] = emptyField;
        for (const enemy of enemies) {
          if (arr[bulletout.posX][posY] === arr[enemy.posX][enemy.posY]) {
            arr[bulletout.posX][posY] = emptyField;
            enemy.status = 'dead';
            enemy.posX = 0;
            enemy.posY = 0;
            clearInterval(interval);
            return arr;
          }
        }
      }
      posY--;
    }, 120);
  }

  if (player.tank === '>') {
    let posY = bulletout.posY + 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][posY] === 'F') {
        arr[bulletout.posX][posY - 1] = emptyField;
        printMap(arr);
        return;
      }
      if (arr[bulletout.posX][posY] === emptyField) {
        arr[bulletout.posX][posY] = bulletout.bullet;
        if (arr[bulletout.posX][posY - 1] !== player.tank) {
          arr[bulletout.posX][posY - 1] = emptyField;
        }
      } else if (arr[bulletout.posX][posY] !== emptyField) {
        arr[bulletout.posX][posY - 1] = emptyField;
        for (const enemy of enemies) {
          if (arr[bulletout.posX][posY] === arr[enemy.posX][enemy.posY]) {
            arr[bulletout.posX][posY] = emptyField;
            enemy.status = 'dead';
            enemy.posX = 0;
            enemy.posY = 0;
            clearInterval(interval);
            return arr;
          }
        }
      }
      printMap(arr);
      posY++;
    }, 120);
  }
};

module.exports = {
  fireBullet
};
