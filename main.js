const map = require('./map').generateMap(15, 15);
const { printMap, playerInput } = require('./player');
const {
  spawnAllEnemies,
  enemySpawn,
  enemyMotion,
  enemies
} = require('./enemy');

// játék futtatásához szükséges függvény
const main = () => {
  playerInput(map, enemies);
  spawnAllEnemies(map, printMap);
  setInterval(() => {
    if (enemies.every((enemy) => enemy.status === 'spawned')) {
      enemyMotion(map);
      printMap(map);
    }
    for (const enemy of enemies) {
      if (enemy.status === 'dead') {
        enemySpawn(map, enemy, printMap);
      }
    }
  }, 500);
};
main();
