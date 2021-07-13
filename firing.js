const fireBullet = (arr) => {
  bulletout.posX = player.posX;
  bulletout.posY = player.posY;
  if (player.tank === '^') {
    let i = bulletout.posX - 1;
    const interval = setInterval(() => {
      if (arr[i][bulletout.posY] === 'F') {
        printMap(arr);

        return (arr[i + 1][bulletout.posY] = emptyField);
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
        //arr[i][bulletout.posY] = 'c';
        arr[i + 1][bulletout.posY] = emptyField;
        arr[i][bulletout.posY] = 'c';
        clearInterval(interval);
        printMap(arr);
        return;
      }
      printMap(arr);
      if (arr[i][bulletout.posY] == 'c') {
        clearInterval(interval);
        return;
      }
      i--;
    }, 120);
  }
  if (player.tank === 'v') {
    let i = bulletout.posX + 1;
    const interval = setInterval(() => {
      if (arr[i][bulletout.posY] === 'F') {
        printMap(arr);
        return (arr[i - 1][bulletout.posY] = emptyField);
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
        // arr[i][bulletout.posY] = 'c';
        arr[i - 1][bulletout.posY] = emptyField;
        arr[i][bulletout.posY] = emptyField;

        clearInterval(interval);
        printMap(arr);
        return;
      }
      if (arr[i][bulletout.posY] == 'c') {
        clearInterval(interval);

        return;
      }
      printMap(arr);
      i++;
    }, 120);
  }

  if (player.tank === '<') {
    let i = bulletout.posY - 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][i] === 'F') {
        printMap(arr);

        return (arr[bulletout.posX][i + 1] = emptyField);
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
        arr[bulletout.posX][i + 1] = emptyField;
        arr[bulletout.posX][i] = emptyField;
        clearInterval(interval);
        printMap(arr);
        return;
      }
      printMap(arr);
      if (arr[bulletout.posX][i] == 'c') {
        clearInterval(interval);

        return;
      }
      i--;
    }, 250);
  }
  if (player.tank === '>') {
    let i = bulletout.posY + 1;
    const interval = setInterval(() => {
      if (arr[bulletout.posX][i] === 'F') {
        printMap(arr);

        return (arr[bulletout.posX][i - 1] = emptyField);
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
        arr[bulletout.posX][i - 1] = emptyField;
        clearInterval(interval);
        printMap(arr);
        return;
      }
      printMap(arr);
      if (arr[bulletout.posX][i] == 'c') {
        clearInterval(interval);

        return;
      }
      i++;
    }, 120);
  }
};
