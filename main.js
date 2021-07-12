const map = require('./map').generateMap(15, 15);
const { printMap, playerInput } = require('./player');
const { spawnAllEnemies, enemies } = require('./enemy');
const enemyMotion = require('./enemy').enemyMotion;

// játék futtatásához szükséges függvény
const main = () => {
  playerInput(map);
  spawnAllEnemies(map, printMap);
  setInterval(() => {
    if (enemies.every((enemy) => enemy.status === 'spawned')) {
      enemyMotion(map);
      printMap(map);
    }
  }, 500);
};
main();
