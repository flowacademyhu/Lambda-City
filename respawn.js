// Sas eltűnésekor game over!!! || PositionEagle === emptyField
const gotHit = (arr) => {
  if (arr[player.posX - 1][player.posY] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    if (playerLife === 1) {
      console.log('Game Over!');
      process.exit();
    }
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    playerLife -= 1;
  }
  if (arr[player.posX + 1][player.posY] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    if (playerLife === 1) {
      console.log('Game Over!');
      process.exit();
    }
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    playerLife -= 1;
  }
  if (arr[player.posX][player.posY - 1] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    if (playerLife === 1) {
      console.log('Game Over!');
      process.exit();
    }
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    playerLife -= 1;
  }
  if (arr[player.posX][player.posY + 1] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    if (playerLife === 1) {
      console.log('Game Over!');
      process.exit();
    }
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    playerLife -= 1;
  }
};
// powerup enemy kill!!!
const powUp = (arr) => {
  if (arr[player.posX][player.posY] === powerUp) {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum <= 7) {
      player.life += 1;
    } else {
      /* megöli az összes pályán levő enemy tankot!!!! */
    }
    arr[player.posX][player.posY] =
      arr[arr.length - 8][(arr.length - 1) / 2 - 4];
  }
  return arr;
};

module.exports = {
  gotHit,
  powUp
};

// const moveDown = (arr) => {
//   if (
//     arr[player.posX + 1][player.posY] === emptyField // || arr[player.posX + 1][player.posY] === powerUp
//   ) {
//     player.posX++;
//     arr[player.posX - 1][player.posY] = emptyField;
//     player.tank = 'v';
//   } else if (arr[player.posX + 1][player.posY] === enemyBullet) {
//     arr[player.posX][player.posY] = emptyField;
//     if (playerLife === 1) {
//       console.log('Game Over!');
//       process.exit();
//     }
//     player.posX = player.spawnPointX;
//     player.posY = player.spawnPointY;
//     playerLife -= 1;
//     console.log(player.life);
//   } else if (arr[player.posX + 1][player.posY] === powerUp) {
//     playerLife += 1;
//   }
//   return arr;
// };

// const moveLeft = (arr) => {
//   if (
//     arr[player.posX][player.posY - 1] === emptyField // || arr[player.posX][player.posY - 1] === powerUp
//   ) {
//     player.posY--;
//     arr[player.posX][player.posY + 1] = emptyField;
//     player.tank = '<';
//   } else if (arr[player.posX][player.posY - 1] === enemyBullet) {
//     arr[player.posX][player.posY] = emptyField;
//     if (playerLife === 1) {
//       console.log('Game Over!');
//       process.exit();
//     }
//     player.posX = player.spawnPointX;
//     player.posY = player.spawnPointY;
//     playerLife -= 1;
//     console.log(player.life);
//   } else if (arr[player.posX][player.posY - 1] === powerUp) {
//     playerLife += 1;
//   }
//   return arr;
// };

// const moveRight = (arr) => {
//   if (
//     arr[player.posX][player.posY + 1] === emptyField // || arr[player.posX][player.posY + 1] === powerUp
//   ) {
//     player.posY++;
//     arr[player.posX][player.posY - 1] = emptyField;
//     player.tank = '>';
//   } else if (arr[player.posX][player.posY + 1] === enemyBullet) {
//     arr[player.posX][player.posY] = emptyField;
//     if (playerLife === 1) {
//       playerLife -= 1;
//       console.log('Game Over!');
//       process.exit();
//     }
//     player.posX = player.spawnPointX;
//     player.posY = player.spawnPointY;
//     playerLife -= 1;
//     console.log(player.life);
//   } else if (arr[player.posX][player.posY + 1] === powerUp) {
//     playerLife += 1;
//   }
//   return arr;
// };
