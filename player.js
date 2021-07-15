const { printMap, emptyField } = require('./map');
const { fireMissile } = require('./firing');
let trigger = false;

// játékos input beolvasása
const playerInput = (arr, enemies, player) => {
  arr[arr.length - 2][(arr.length - 1) / 2 - 2] = player.tankIcon;
  player.posX = player.spawnPointX;
  player.posY = player.spawnPointY;
  printMap(arr);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === 'w') {
      playerMoveUp(arr, player);
      arr[player.posX][player.posY] = player.tankIcon;
      printMap(arr);
    } else if (key === 's') {
      playerMoveDown(arr, player);
      arr[player.posX][player.posY] = player.tankIcon;
      printMap(arr);
    } else if (key === 'a') {
      playerMoveLeft(arr, player);
      arr[player.posX][player.posY] = player.tankIcon;
      printMap(arr);
    } else if (key === 'd') {
      playerMoveRight(arr, player);
      arr[player.posX][player.posY] = player.tankIcon;
      printMap(arr);
    } else if (key === ' ') {
      if (trigger === false) {
        fireMissile(arr, emptyField, player, enemies);
        trigger = true;
        setTimeout(() => (trigger = false), 2000);
        printMap(arr);
      }
    } else if (key === 'h') {
      process.exit();
    }
  });
};

// játékos felfelé mozgatása
const playerMoveUp = (arr, player) => {
  if (arr[player.posX - 1][player.posY] === emptyField) {
    player.posX--;
    arr[player.posX + 1][player.posY] = emptyField;
    player.tankIcon = '^';
  }
  player.tankIcon = '^';
  return arr;
};

// játékos lefelé mozgatása
const playerMoveDown = (arr, player) => {
  if (arr[player.posX + 1][player.posY] === emptyField) {
    player.posX++;
    arr[player.posX - 1][player.posY] = emptyField;
    player.tankIcon = 'v';
  }
  player.tankIcon = 'v';
  return arr;
};

// játékos balra mozgatása
const playerMoveLeft = (arr, player) => {
  if (arr[player.posX][player.posY - 1] === emptyField) {
    player.posY--;
    arr[player.posX][player.posY + 1] = emptyField;
    player.tankIcon = '<';
  }
  player.tankIcon = '<';
  return arr;
};

// játékos jobbra mozgatása
const playerMoveRight = (arr, player) => {
  if (arr[player.posX][player.posY + 1] === emptyField) {
    player.posY++;
    arr[player.posX][player.posY - 1] = emptyField;
    player.tankIcon = '>';
  }
  player.tankIcon = '>';
  return arr;
};

module.exports = {
  playerInput,
  printMap
};
