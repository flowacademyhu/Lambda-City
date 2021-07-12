const table = require('table').table;
const map = require('./map').generateMap(15, 15);
const emptyField = require('./map').emptyField;

// pálya kirajzoltatása
const printMap = (map) => {
  console.clear(map);
  console.log(table(map));
};

const player = {
  tank: '^',
  life: 3,
  spawnPointX: map.length - 2,
  spawnPointY: (map.length - 1) / 2 - 2,
  posX: 0,
  posY: 0
};

// játékos input beolvasása
const playerInput = (arr) => {
  arr[arr.length - 2][(arr.length - 1) / 2 - 2] = player.tank;
  player.posX = player.spawnPointX;
  player.posY = player.spawnPointY;
  printMap(arr);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === 'w') {
      playerMoveUp(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 's') {
      playerMoveDown(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 'a') {
      playerMoveLeft(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 'd') {
      playerMoveRight(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 'h') {
      process.exit();
    } else if (key === 'q') {
      if (player.tank === '^') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = '<';
        printMap(arr);
      } else if (player.tank === '<') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = 'v';
        printMap(arr);
      } else if (player.tank === 'v') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = '>';
        printMap(arr);
      } else if (player.tank === '>') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = '^';
        printMap(arr);
      }
    } else if (key === 'e') {
      if (player.tank === '^') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = '>';
        printMap(arr);
      } else if (player.tank === '>') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = 'v';
        printMap(arr);
      } else if (player.tank === 'v') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = '<';
        printMap(arr);
      } else if (player.tank === '<') {
        arr[player.posX][player.posY] = player.tank;
        player.tank = '^';
        printMap(arr);
      }
    }
  });
};

// játékos felfelé mozgatása
const playerMoveUp = (arr) => {
  if (arr[player.posX - 1][player.posY] === emptyField) {
    player.posX--;
    arr[player.posX + 1][player.posY] = emptyField;
    player.tank = '^';
  }
  return arr;
};

// játékos lefelé mozgatása
const playerMoveDown = (arr) => {
  if (arr[player.posX + 1][player.posY] === emptyField) {
    player.posX++;
    arr[player.posX - 1][player.posY] = emptyField;
    player.tank = 'v';
  }
  return arr;
};

// játékos balra mozgatása
const playerMoveLeft = (arr) => {
  if (arr[player.posX][player.posY - 1] === emptyField) {
    player.posY--;
    arr[player.posX][player.posY + 1] = emptyField;
    player.tank = '<';
  }
  return arr;
};

// játékos jobbra mozgatása
const playerMoveRight = (arr) => {
  if (arr[player.posX][player.posY + 1] === emptyField) {
    player.posY++;
    arr[player.posX][player.posY - 1] = emptyField;
    player.tank = '>';
  }
  return arr;
};

module.exports = {
  player,
  playerInput,
  printMap
};
