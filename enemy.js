const map = require('./map').generateMap(15, 15);
const emptyField = require('./map').emptyField;
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

const enemy2 = {
  tank: 'v',
  life: 1,
  spawnPointX: map.length - (map.length - 1),
  spawnPointY: map.length - 2,
  posX: 0,
  posY: 0,
  direction: 'obstructed',
  status: 'unspawned'
};

const enemy3 = {
  tank: 'v',
  life: 1,
  spawnPointX: map.length - (map.length - 1),
  spawnPointY: map.length - (map.length - 1),
  posX: 0,
  posY: 0,
  direction: 'obstructed',
  status: 'unspawned'
};

const enemies = [enemy1, enemy2, enemy3];

const spawnAllEnemies = (arr, printMap) => {
  for (const enemy of enemies) {
    enemySpawn(arr, enemy, printMap);
  }
};

// ellenfél lehelyezése a pályára
const enemySpawn = (arr, enemy, printMap) => {
  setTimeout(() => {
    arr[arr.length - (arr.length - 1)][(arr.length - 1) / 2] = enemy.tank;
    enemy.posX = enemy.spawnPointX;
    enemy.posY = enemy.spawnPointY;
    enemy.status = 'spawned';
  }, 1500);
  printMap(arr);
};

// ellenfél mozgása
const enemyMotion = (arr) => {
  for (const enemy of enemies) {
    if (
      enemy.posX !== arr.length - 2 &&
      enemy.posX !== arr.length + 1 - arr.length
    ) {
      checkPlayer(arr, enemy);
    }
    if (enemy.direction === 'obstructed') {
      const key = ['w', 's', 'a', 'd'];
      const randomKey = Math.floor(Math.random() * 4);
      if (key[randomKey] === 'w') {
        enemyMoveUp(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
        enemy.direction = 'w';
      } else if (key[randomKey] === 's') {
        enemyMoveDown(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
        enemy.direction = 's';
      } else if (key[randomKey] === 'a') {
        enemyMoveLeft(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
        enemy.direction = 'a';
      } else if (key[randomKey] === 'd') {
        enemyMoveRight(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
        enemy.direction = 'd';
      }
    } else {
      if (enemy.direction === 'w') {
        enemyMoveUp(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
      } else if (enemy.direction === 's') {
        enemyMoveDown(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
      } else if (enemy.direction === 'a') {
        enemyMoveLeft(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
      } else if (enemy.direction === 'd') {
        enemyMoveRight(arr, enemy);
        arr[enemy.posX][enemy.posY] = enemy.tank;
      }
    }
  }
  return arr;
};

// ellenfél felfelé mozgatása
const enemyMoveUp = (arr, enemy) => {
  if (arr[enemy.posX - 1][enemy.posY] === emptyField) {
    enemy.posX--;
    arr[enemy.posX + 1][enemy.posY] = emptyField;
    enemy.tank = '^';
  } else {
    enemy.direction = 'obstructed';
  }

  return arr;
};

// ellenfél lefelé mozgatása
const enemyMoveDown = (arr, enemy) => {
  if (arr[enemy.posX + 1][enemy.posY] === emptyField) {
    enemy.posX++;
    arr[enemy.posX - 1][enemy.posY] = emptyField;
    enemy.tank = 'v';
  } else {
    enemy.direction = 'obstructed';
  }

  return arr;
};

// ellenfél balra mozgatása
const enemyMoveLeft = (arr, enemy) => {
  if (arr[enemy.posX][enemy.posY - 1] === emptyField) {
    enemy.posY--;
    arr[enemy.posX][enemy.posY + 1] = emptyField;
    enemy.tank = '<';
  } else {
    enemy.direction = 'obstructed';
  }

  return arr;
};

// ellenfél jobbra mozgatása
const enemyMoveRight = (arr, enemy) => {
  if (arr[enemy.posX][enemy.posY + 1] === emptyField) {
    enemy.posY++;
    arr[enemy.posX][enemy.posY - 1] = emptyField;
    enemy.tank = '>';
  } else {
    enemy.direction = 'obstructed';
  }

  return arr;
};

// játékos követésének megvizsgálása
const checkPlayer = (arr, enemy) => {
  if (enemy.posX === player.posX && enemy.posY > player.posY) {
    const distance = enemy.posY - player.posY - 1;
    let emptyFieldCounter = 0;
    for (let posY = player.posY + 1; posY < enemy.posY; posY++) {
      if (arr[enemy.posX][posY] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy.direction = 'a';
      enemy.tank = '<';
    }
  } else if (enemy.posX === player.posX && enemy.posY < player.posY) {
    const distance = player.posY - enemy.posY - 1;
    let emptyFieldCounter = 0;
    for (let posY = enemy.posY + 1; posY < player.posY; posY++) {
      if (arr[enemy.posX][posY] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy.direction = 'd';
      enemy.tank = '>';
    }
  } else if (enemy.posY === player.posY && enemy.posX > player.posX) {
    const distance = enemy.posX - player.posX - 1;
    let emptyFieldCounter = 0;
    for (let posX = player.posX + 1; posX < enemy.posX; posX++) {
      if (arr[posX][enemy.posY] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy.direction = 'w';
      enemy.tank = '^';
    }
  } else if (enemy.posY === player.posY && enemy.posX < player.posX) {
    const distance = player.posX - enemy.posX - 1;
    let emptyFieldCounter = 0;
    for (let posX = enemy.posX + 1; posX < player.posX; posX++) {
      if (arr[posX][enemy.posY] === emptyField) {
        emptyFieldCounter++;
      }
    }
    if (distance === emptyFieldCounter) {
      enemy.direction = 's';
      enemy.tank = 'v';
    }
  }
};

module.exports = {
  enemies,
  enemySpawn,
  enemyMotion,
  spawnAllEnemies
};
