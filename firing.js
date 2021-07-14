const bulletout = {
  bullet: '*',
  posX: 0,
  posY: 0
};

const fireBullet = (arr) => {
  bulletout.posX = player.posX;
  bulletout.posY = player.posY;
  if (player.tank == '^') {
    let i = bulletout.posX - 1;
    const interval = setInterval(() => {
      if (arr[posX][bulletout.posY] === 'F') {
        arr[posX + 1][bulletout.posY] = emptyField;
        printMap(arr);
        if (arr[i + 1][bulletout.posY] !== player.tank) {
          return (arr[i + 1][bulletout.posY] = emptyField);
        } else {
          return;
        }
      }
      if (arr[posX][bulletout.posY] === emptyField) {
        arr[posX][bulletout.posY] = bulletout.bullet;
        if (arr[posX + 1][bulletout.posY] !== player.tank) {
          arr[posX + 1][bulletout.posY] = emptyField;
        }
      } else if (arr[posX][bulletout.posY] !== emptyField) {
        arr[posX][bulletout.posY] = emptyField;
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
      } else if (arr[i][bulletout.posY] !== emptyField) {
        //arr[i][bulletout.posY] = 'c';
        arr[i][bulletout.posY] = emptyField;

        if (arr[i + 1][bulletout.posY] !== player.tank) {
          arr[i + 1][bulletout.posY] = emptyField;
        }
        clearInterval(interval);
      }
      printMap(arr);
      if (arr[i][bulletout.posY] == 'c') {
        clearInterval(interval);
        return;
      }
      i--;
    }, 60);
  }
  if (player.tank == 'v') {
    let i = bulletout.posX + 1;
    const interval = setInterval(() => {
      if (arr[posX][bulletout.posY] === 'F') {
        arr[posX - 1][bulletout.posY] = emptyField;
        printMap(arr);
        if (arr[i - 1][bulletout.posY] !== player.tank) {
          return (arr[i - 1][bulletout.posY] = emptyField);
        } else;
        {
          return;
        }
      }
      if (arr[posX][bulletout.posY] === emptyField) {
        arr[posX][bulletout.posY] = bulletout.bullet;
        if (arr[posX - 1][bulletout.posY] !== player.tank) {
          arr[posX - 1][bulletout.posY] = emptyField;
        }
      } else if (arr[posX][bulletout.posY] !== emptyField) {
        arr[posX][bulletout.posY] = emptyField;
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
      } else if (arr[i][bulletout.posY] !== emptyField) {
        // arr[i][bulletout.posY] = 'c';
        arr[i][bulletout.posY] = emptyField;
        if (arr[i - 1][bulletout.posY] !== player.tank) {
          arr[i - 1][bulletout.posY] = emptyField;
        }

        clearInterval(interval);
        printMap(arr);
        return;
      }

      printMap(arr);
      i++;
    }, 60);
  }

  if (player.tank == '<') {
    let i = bulletout.posY - 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][posY] === 'F') {
        arr[bulletout.posX][posY + 1] = emptyField;
        printMap(arr);
        if (arr[bulletout.posX][i + 1] !== player.tank) {
          return (arr[bulletout.posX][i + 1] = emptyField);
        } else {
          return;
        }
      }
      if (arr[bulletout.posX][posY] === emptyField) {
        arr[bulletout.posX][posY] = bulletout.bullet;
        if (arr[bulletout.posX][posY + 1] !== player.tank) {
          arr[bulletout.posX][posY + 1] = emptyField;
        }
      } else if (arr[bulletout.posX][posY] !== emptyField) {
        arr[bulletout.posX][posY] = emptyField;
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
      } else if (arr[bulletout.posX][i] !== emptyField) {
        arr[bulletout.posX][i] = emptyField;
        if (arr[bulletout.posX][i + 1] !== player.tank) {
          arr[bulletout.posX][i + 1] = emptyField;
        }
        if (arr[bulletout.posX][i + 1] !== player.tank) {
          arr[bulletout.posX][i + 1] = emptyField;
        }
        clearInterval(interval);
      }
      printMap(arr);
      if (arr[bulletout.posX][i] == 'c') {
        clearInterval(interval);

        return;
      }
      i--;
    }, 60);
  }
  if (player.tank == '>') {
    let i = bulletout.posY + 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][posY] === 'F') {
        arr[bulletout.posX][posY - 1] = emptyField;
        printMap(arr);
        if (arr[bulletout.posX][i - 1] !== player.tank) {
          return (arr[bulletout.posX][i - 1] = emptyField);
        } else {
          return;
        }
      }
      if (arr[bulletout.posX][posY] === emptyField) {
        arr[bulletout.posX][posY] = bulletout.bullet;
        if (arr[bulletout.posX][posY - 1] !== player.tank) {
          arr[bulletout.posX][posY - 1] = emptyField;
        }
      } else if (arr[bulletout.posX][posY] !== emptyField) {
        arr[bulletout.posX][posY] = emptyField;
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
      } else if (arr[bulletout.posX][i] !== emptyField) {
        arr[bulletout.posX][i] = emptyField;
        if (arr[bulletout.posX][i - 1] !== player.tank) {
          arr[bulletout.posX][i - 1] = emptyField;
        }
        clearInterval(interval);
      }
      printMap(arr);
      if (arr[bulletout.posX][i] == 'c') {
        clearInterval(interval);

        return;
      }
      i++;
    }, 60);
  }
};

module.exports = {
  fireBullet
};
