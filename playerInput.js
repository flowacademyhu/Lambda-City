const map = require('./map');
const emptyField = '';

const player = {
  tank: 'P',
  life: 3,
  spawnPointX: map.length - 2,
  spawnPointY: (map.length - 1) / 2 - 2,
  posX: 0,
  posY: 0
};

const printMap = (map) => {
  console.log(table(map));
};

const playerInput = (arr) => {
  if (
    player.spawnPointX === arr.length - 2 &&
    player.spawnPointY === (arr.length - 1) / 2 - 2
  ) {
    arr[arr.length - 2][(arr.length - 1) / 2 - 2] = player.tank;
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    printMap(arr);
  }
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === 'w') {
      moveUp(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 's') {
      moveDown(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 'a') {
      moveLeft(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 'd') {
      moveRight(arr);
      arr[player.posX][player.posY] = player.tank;
      printMap(arr);
    } else if (key === 'q') {
      process.exit();
    }
  });
};
playerInput(map);

const moveUp = (arr) => {
  if (arr[player.posX - 1][player.posY] === emptyField) {
    player.posX--;
    arr[player.posX + 1][player.posY] = emptyField;
  }
  return arr;
};

const moveDown = (arr) => {
  if (arr[player.posX + 1][player.posY] === emptyField) {
    player.posX++;
    arr[player.posX - 1][player.posY] = emptyField;
  }
  return arr;
};

const moveLeft = (arr) => {
  if (arr[player.posX][player.posY - 1] === emptyField) {
    player.posY--;
    arr[player.posX][player.posY + 1] = emptyField;
  }
  return arr;
};

const moveRight = (arr) => {
  if (arr[player.posX][player.posY + 1] === emptyField) {
    player.posY++;
    arr[player.posX][player.posY - 1] = emptyField;
  }
  return arr;
};
