const { generateMap } = require('./map');
const { playerInput } = require('./player');
const printColorMap = require('./colormap').printColorMap;
const mainMusic = require('./sound').mainMusic;
const tankSound = require('./sound').tankSound;
const mplayer3 = require('./sound').mplayer3;
const startSound = require('./sound').startSound;

const {
  spawnAllEnemies,
  enemySpawn,
  enemyMotion,
  getHighScore,
  getNumOfEnemies
} = require('./enemy');
const map = generateMap(15, 15);

const player = {
  tankIcon: '^',
  life: 3,
  spawnPointX: map.length - 2,
  spawnPointY: (map.length - 1) / 2 - 2,
  posX: 0,
  posY: 0,
  score: 0,
  missileIcon: '*',
  missilePosX: 0,
  missilePosY: 0,
  isPlayer: true
};

const enemy1 = {
  tankIcon: 'v',
  spawnPointX: map.length - (map.length - 1),
  spawnPointY: (map.length - 1) / 2,
  posX: 0,
  posY: 0,
  direction: 'obstructed',
  status: 'unspawned',
  missileIcon: '*',
  missilePosX: 0,
  missilePosY: 0
};

const enemy2 = {
  tankIcon: 'v',
  spawnPointX: map.length - (map.length - 1),
  spawnPointY: map.length - 2,
  posX: 0,
  posY: 0,
  direction: 'obstructed',
  status: 'unspawned',
  missileIcon: '*',
  missilePosX: 0,
  missilePosY: 0
};

const enemy3 = {
  tankIcon: 'v',
  spawnPointX: map.length - (map.length - 1),
  spawnPointY: map.length - (map.length - 1),
  posX: 0,
  posY: 0,
  direction: 'obstructed',
  status: 'unspawned',
  missileIcon: '*',
  missilePosX: 0,
  missilePosY: 0
};

const enemies = [enemy1, enemy2, enemy3];

// játék futtatásához szükséges függvény
const main = () => {
  playerInput(map, enemies, player, getNumOfEnemies);
  spawnAllEnemies(map, enemies);
  setInterval(() => {
    for (const enemy of enemies) {
      if (enemy.status === 'spawned') {
        enemyMotion(map, enemy, enemies, player);
      } else if (enemy.status === 'dead') {
        enemySpawn(map, enemy);
      }
      printColorMap(map, enemies, player, getNumOfEnemies(), getHighScore());
    }
  }, 500);
};
tankSound();
startSound();
setTimeout(() => mainMusic(), 4000);
main();
module.exports = { enemies };
