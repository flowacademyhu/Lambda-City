const map = require('./map').generateMap(15, 15);
const playerInput = require('./player').playerInput;
const printMap = require('./player').printMap;
const enemy1 = require('./enemy').enemy1;
const enemySpawn = require('./enemy').enemySpawn;
const enemyMotion = require('./enemy').enemyMotion;

// játék futtatásához szükséges függvény
const main = () => {
  playerInput(map);
  enemySpawn(map);
  setInterval(() => {
    if (enemy1.status === 'spawned') {
      enemyMotion(map);
      printMap(map);
    }
  }, 500);
};
main();
