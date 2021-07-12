const map = require('./map').generateMap(15, 15);
const emptyField = require('./map').emptyField;
const printMap = require('./player').printMap;
const player = require('./player').player;

const enemy1 = {
  tank: 'v',
  life: 1,
  spawnPointX: map.length - (map.length - 1),
  spawnPointY: (map.length - 1) / 2,
  posX: 0,
  posY: 0,
  direction: 'obstructed',
  status: 'unspawned'
};

// const enemy2 = {
//   tank: 'v',
//   life: 1,
//   spawnPointX: map.length - (map.length - 1),
//   spawnPointY: map.length - 2,
//   posX: 0,
//   posY: 0,
//   direction: 'obstructed',
//   status: 'unspawned'
// };

// const enemy3 = {
//   tank: 'v',
//   life: 1,
//   spawnPointX: map.length - (map.length - 1),
//   spawnPointY: map.length - (map.length - 1),
//   posX: 0,
//   posY: 0,
//   direction: 'obstructed',
//   status: 'unspawned'
// };

// ellenfél lehelyezése a pályára
const enemySpawn = (arr) => {
  setTimeout(() => {
    arr[arr.length - (arr.length - 1)][(arr.length - 1) / 2] = enemy1.tank;
    enemy1.posX = enemy1.spawnPointX;
    enemy1.posY = enemy1.spawnPointY;
    enemy1.status = 'spawned';
  }, 2000);
  printMap(arr);
};

// ellenfél mozgása
const enemyMotion = (arr) => {
  if (
    enemy1.posX !== arr.length - 2 &&
    enemy1.posX !== arr.length + 1 - arr.length
  ) {
    checkPlayer(arr);
  }
  if (enemy1.direction === 'obstructed') {
    const key = ['w', 's', 'a', 'd'];
    const randomKey = Math.floor(Math.random() * 4);
    if (key[randomKey] === 'w') {
      enemyMoveUp(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
      enemy1.direction = 'w';
    } else if (key[randomKey] === 's') {
      enemyMoveDown(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
      enemy1.direction = 's';
    } else if (key[randomKey] === 'a') {
      enemyMoveLeft(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
      enemy1.direction = 'a';
    } else if (key[randomKey] === 'd') {
      enemyMoveRight(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
      enemy1.direction = 'd';
    }
  } else {
    if (enemy1.direction === 'w') {
      enemyMoveUp(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
    } else if (enemy1.direction === 's') {
      enemyMoveDown(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
    } else if (enemy1.direction === 'a') {
      enemyMoveLeft(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
    } else if (enemy1.direction === 'd') {
      enemyMoveRight(arr);
      arr[enemy1.posX][enemy1.posY] = enemy1.tank;
    }
  }
  return arr;
};

// ellenfél felfelé mozgatása
const enemyMoveUp = (arr) => {
  if (arr[enemy1.posX - 1][enemy1.posY] === emptyField) {
    enemy1.posX--;
    arr[enemy1.posX + 1][enemy1.posY] = emptyField;
    enemy1.tank = '^';
  } else {
    enemy1.direction = 'obstructed';
  }
  return arr;
};

// ellenfél lefelé mozgatása
const enemyMoveDown = (arr) => {
  if (arr[enemy1.posX + 1][enemy1.posY] === emptyField) {
    enemy1.posX++;
    arr[enemy1.posX - 1][enemy1.posY] = emptyField;
    enemy1.tank = 'v';
  } else {
    enemy1.direction = 'obstructed';
  }
  return arr;
};

// ellenfél balra mozgatása
const enemyMoveLeft = (arr) => {
  if (arr[enemy1.posX][enemy1.posY - 1] === emptyField) {
    enemy1.posY--;
    arr[enemy1.posX][enemy1.posY + 1] = emptyField;
    enemy1.tank = '<';
  } else {
    enemy1.direction = 'obstructed';
  }
  return arr;
};

// ellenfél jobbra mozgatása
const enemyMoveRight = (arr) => {
  if (arr[enemy1.posX][enemy1.posY + 1] === emptyField) {
    enemy1.posY++;
    arr[enemy1.posX][enemy1.posY - 1] = emptyField;
    enemy1.tank = '>';
  } else {
    enemy1.direction = 'obstructed';
  }
  return arr;
};

// játékos követésének megvizsgálása
const checkPlayer = (arr) => {
  if (enemy1.posX === player.posX && enemy1.posY > player.posY) {
    const distance = enemy1.posY - player.posY - 1;
    let emptyFieldCounter = 0;
    for (let j = player.posY + 1; j < enemy1.posY; j++) {
      if (arr[enemy1.posX][j] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy1.direction = 'a';
    }
  } else if (enemy1.posX === player.posX && enemy1.posY < player.posY) {
    const distance = player.posY - enemy1.posY - 1;
    let emptyFieldCounter = 0;
    for (let j = enemy1.posY + 1; j < player.posY; j++) {
      if (arr[enemy1.posX][j] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy1.direction = 'd';
    }
  } else if (enemy1.posY === player.posY && enemy1.posX > player.posX) {
    const distance = enemy1.posX - player.posX - 1;
    let emptyFieldCounter = 0;
    for (let i = player.posX + 1; i < enemy1.posX; i++) {
      if (arr[i][enemy1.posY] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy1.direction = 'w';
    }
  } else if (enemy1.posY === player.posY && enemy1.posX < player.posX) {
    const distance = player.posX - enemy1.posX - 1;
    let emptyFieldCounter = 0;
    for (let i = enemy1.posX + 1; i < player.posX; i++) {
      if (arr[i][enemy1.posY] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy1.direction = 's';
    }
  }
};

module.exports = {
  enemy1,
  enemySpawn,
  enemyMotion
};
