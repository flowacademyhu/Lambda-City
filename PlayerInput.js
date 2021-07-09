//const fireBullet = require('./bullet').fireBullet;
const table = require('table').table;
const emptyField = '';

const generateMap = (width, height) => {
  const arr = new Array(height);
  const PositionEagle = (arr.length - 1) / 2;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(width);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = emptyField;
      arr[0][j] = 'F';
      arr[arr.length - 1][j] = 'F';
      arr[i][0] = 'F';
      arr[i][arr.length - 1] = 'F';
      arr[arr.length - 2][PositionEagle] = 'E';
      arr[arr.length - 2][PositionEagle - 1] = 'B';
      arr[arr.length - 2][PositionEagle + 1] = 'B';
      arr[arr.length - 3][PositionEagle - 1] = 'B';
      arr[arr.length - 3][PositionEagle + 1] = 'B';
      arr[arr.length - 3][PositionEagle] = 'B';
    }
  }
  return arr;
};

const map = generateMap(11, 11);
const bulletout = {
  bullet: 'BU'
};
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
    } else if (key === ' ') {
      fireBullet(arr);
      printMap(arr);
    } else if (key === 'q') {
      process.exit();
    }
  });
};
playerInput(map);
//fire();
const moveUp = (arr) => {
  if (arr[player.posX - 1][player.posY] === emptyField) {
    player.posX--;
    arr[player.posX + 1][player.posY] = emptyField;
    player.tank = '^';
  }
  return arr;
};

const moveDown = (arr) => {
  if (arr[player.posX + 1][player.posY] === emptyField) {
    player.posX++;
    arr[player.posX - 1][player.posY] = emptyField;
    player.tank = 'v';
  }
  return arr;
};

const moveLeft = (arr) => {
  if (arr[player.posX][player.posY - 1] === emptyField) {
    player.posY--;
    arr[player.posX][player.posY + 1] = emptyField;
    player.tank = '<';
  }
  return arr;
};

const moveRight = (arr) => {
  if (arr[player.posX][player.posY + 1] === emptyField) {
    player.posY++;
    arr[player.posX][player.posY - 1] = emptyField;
    player.tank = '>';
  }
  return arr;
};
const fireBullet = (arr) => {
  if (player.tank === '^') {
    for (let i = player.posX - 1; i > 0; i--) {
      // for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][player.posY] === emptyField) {
        arr[i][player.posY] = bulletout.bullet;
      } else if (arr[i] !== emptyField) {
        return (arr[i][player.posY] = emptyField);
      }
    }
  }

  if (player.tank === 'v') {
    for (let i = player.posX + 1; i < arr.length - 1; i++) {
      // for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][player.posY] === emptyField) {
        arr[i][player.posY] = bulletout.bullet;
      } else if (arr[i] !== emptyField) {
        return (arr[i][player.posY] = emptyField);
      }
    }
  }
  if (player.tank === '<') {
    //for (let i = 0; i < arr.length; i++) {
    for (let j = player.posY - 1; j > 0; j--) {
      if (arr[player.posX][j] === emptyField) {
        arr[player.posX][j] = bulletout.bullet;
      } else if (arr[j] !== emptyField) {
        return (arr[player.posX][j] = emptyField);
      }
    }
  }
  if (player.tank === '>') {
    //for (let i = player.posX; i < arr.length; i++) {
    for (let j = player.posY + 1; j < arr.length - 1; j++) {
      if (arr[player.posX][j] === emptyField) {
        arr[player.posX][j] = bulletout.bullet;
      } else if (arr[j] !== emptyField) {
        return (arr[player.posX][j] = emptyField);
      }
    }
  }

  return arr;
};
