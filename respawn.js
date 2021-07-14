// Sas eltűnésekor game over!!! || PositionEagle === emptyField,,,,, enemyBullet???
const gotHit = (arr, player) => {
  if (arr[player.posX - 1][player.posY] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    player.life -= 1;
  }
  if (arr[player.posX + 1][player.posY] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    player.life -= 1;
  }
  if (arr[player.posX][player.posY - 1] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    player.life -= 1;
  }
  if (arr[player.posX][player.posY + 1] === enemyBullet) {
    arr[player.posX][player.posY] = emptyField;
    player.posX = player.spawnPointX;
    player.posY = player.spawnPointY;
    player.life -= 1;
  }
};
// powerup enemy kill!!!
const powUp = (arr, player) => {
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

const gameOver = () => {
  if (player.life === 1 || arr[arr.length - 2][PosEagle] == emptyField){
    console.log('Játék vége! Játék alatt kilőttél xy mennyiségű tankot!'); // kilőtt tankok mennyisége tárolva!!!
    process.exit();
  }else if (/*kilőttél x mennyiségú tankot*/){
    console.log('Gratulálunk Bajnok, nyertél!')
    process.exit();
  }
};

module.exports = {
  gotHit,
  powUp,
  gameOver,

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
