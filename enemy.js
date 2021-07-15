const emptyField = require('./map').emptyField;
const { fireMissile } = require('./firing');

const spawnAllEnemies = (arr, enemies) => {
  for (const enemy of enemies) {
    enemySpawn(arr, enemy);
  }
};

// ellenfél lehelyezése a pályára
const enemySpawn = (arr, enemy) => {
  // setTimeout(() => {
  arr[enemy.spawnPointX][enemy.spawnPointY] = enemy.tankIcon;
  enemy.posX = enemy.spawnPointX;
  enemy.posY = enemy.spawnPointY;
  enemy.status = 'spawned';
  // }, 1500);
};

// ellenfél mozgása
const enemyMotion = (arr, enemy, enemies, player) => {
  if (enemy.status !== 'dead') {
    if (
      enemy.posX !== arr.length - 2 &&
      enemy.posX !== arr.length + 1 - arr.length
    ) {
      checkPlayer(arr, enemy, player);
    }
    if (enemy.direction === 'obstructed') {
      const key = ['w', 's', 'a', 'd'];
      const randomKey = Math.floor(Math.random() * 4);
      if (key[randomKey] === 'w') {
        enemyMoveUp(arr, enemy);
        enemy.direction = 'w';
      } else if (key[randomKey] === 's') {
        enemyMoveDown(arr, enemy);
        enemy.direction = 's';
      } else if (key[randomKey] === 'a') {
        enemyMoveLeft(arr, enemy);
        enemy.direction = 'a';
      } else if (key[randomKey] === 'd') {
        enemyMoveRight(arr, enemy);
        enemy.direction = 'd';
      }
      setTimeout(() => {
        fireMissile(arr, emptyField, enemy, enemies);
      }, 1000);
    } else {
      if (enemy.direction === 'w') {
        enemyMoveUp(arr, enemy);
      } else if (enemy.direction === 's') {
        enemyMoveDown(arr, enemy);
      } else if (enemy.direction === 'a') {
        enemyMoveLeft(arr, enemy);
      } else if (enemy.direction === 'd') {
        enemyMoveRight(arr, enemy);
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
    enemy.tankIcon = '^';
    arr[enemy.posX][enemy.posY] = enemy.tankIcon;
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
    enemy.tankIcon = 'v';
    arr[enemy.posX][enemy.posY] = enemy.tankIcon;
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
    enemy.tankIcon = '<';
    arr[enemy.posX][enemy.posY] = enemy.tankIcon;
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
    enemy.tankIcon = '>';
    arr[enemy.posX][enemy.posY] = enemy.tankIcon;
  } else {
    enemy.direction = 'obstructed';
  }

  return arr;
};

// játékos követhetőségének megvizsgálása
const checkPlayer = (arr, enemy, player) => {
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
      enemy.tankIcon = '<';
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
      enemy.tankIcon = '>';
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
      enemy.tankIcon = '^';
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
      enemy.tankIcon = 'v';
    }
  }
};

module.exports = {
  enemySpawn,
  enemyMotion,
  spawnAllEnemies
};
