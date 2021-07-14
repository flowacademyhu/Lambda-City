const bulletout = {
  bullet: '*',
  posX: 0,
  posY: 0
};

const fireBullet = (arr, player, printMap, emptyField) => {
  bulletout.posX = player.posX;
  bulletout.posY = player.posY;

  if (player.tank === '^') {
    let i = bulletout.posX - 1;
    const interval = setInterval(() => {
      if (arr[i][bulletout.posY] === 'F') {
        printMap(arr);
        if (arr[i + 1][bulletout.posY] !== player.tank) {
          return (arr[i + 1][bulletout.posY] = emptyField);
        } else {
          return;
        }
      }
      if (arr[i][bulletout.posY] === emptyField) {
        arr[i][bulletout.posY] = bulletout.bullet;
        if (arr[i + 1][bulletout.posY] !== player.tank) {
          arr[i + 1][bulletout.posY] = emptyField;
        } else if (arr[i + 1][bulletout.posY] !== player.tank) {
          arr[i][bulletout.posY] = bulletout.bullet;
          clearInterval(interval);
          return;
        }
      } else if (arr[i][bulletout.posY] !== emptyField) {
        arr[i][bulletout.posY] = emptyField;

        if (arr[i + 1][bulletout.posY] !== player.tank) {
          arr[i + 1][bulletout.posY] = emptyField;
        }
        clearInterval(interval);
        printMap(arr);
        return;
      }
      printMap(arr);
      i--;
    }, 60);
  }

  if (player.tank === 'v') {
    let i = bulletout.posX + 1;
    const interval = setInterval(() => {
      if (arr[i][bulletout.posY] === 'F') {
        printMap(arr);
        if (arr[i - 1][bulletout.posY] !== player.tank) {
          return (arr[i - 1][bulletout.posY] = emptyField);
        } else {
          return;
        }
      }
      if (arr[i][bulletout.posY] === emptyField) {
        arr[i][bulletout.posY] = bulletout.bullet;
        if (arr[i - 1][bulletout.posY] !== player.tank) {
          arr[i - 1][bulletout.posY] = emptyField;
        } else if (arr[i - 1][bulletout.posY] !== player.tank) {
          arr[i][bulletout.posY] = bulletout.bullet;
          clearInterval(interval);
          return;
        }
      } else if (arr[i][bulletout.posY] !== emptyField) {
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

  if (player.tank === '<') {
    let i = bulletout.posY - 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][i] === 'F') {
        printMap(arr);
        if (arr[bulletout.posX][i + 1] !== player.tank) {
          return (arr[bulletout.posX][i + 1] = emptyField);
        } else {
          return;
        }
      }
      if (arr[bulletout.posX][i] === emptyField) {
        arr[bulletout.posX][i] = bulletout.bullet;
        if (arr[bulletout.posX][i + 1] !== player.tank) {
          arr[bulletout.posX][i + 1] = emptyField;
        } else if (arr[bulletout.posX][i + 1] !== player.tank) {
          arr[bulletout.posX][i] = bulletout.bullet;
          clearInterval(interval);
          return;
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
        printMap(arr);
        return;
      }
      printMap(arr);
      i--;
    }, 60);
  }

  if (player.tank === '>') {
    let i = bulletout.posY + 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][i] === 'F') {
        printMap(arr);
        if (arr[bulletout.posX][i - 1] !== player.tank) {
          return (arr[bulletout.posX][i - 1] = emptyField);
        } else {
          return;
        }
      }
      if (arr[bulletout.posX][i] === emptyField) {
        arr[bulletout.posX][i] = bulletout.bullet;
        if (arr[bulletout.posX][i - 1] !== player.tank) {
          arr[bulletout.posX][i - 1] = emptyField;
        } else if (arr[bulletout.posX][i - 1] !== player.tank) {
          arr[bulletout.posX][i] = bulletout.bullet;
          clearInterval(interval);
          return;
        }
      } else if (arr[bulletout.posX][i] !== emptyField) {
        arr[bulletout.posX][i] = emptyField;
        if (arr[bulletout.posX][i - 1] !== player.tank) {
          arr[bulletout.posX][i - 1] = emptyField;
        }
        clearInterval(interval);
        printMap(arr);
        return;
      }
      printMap(arr);
      i++;
    }, 60);
  }
};

module.exports = {
  fireBullet
};
