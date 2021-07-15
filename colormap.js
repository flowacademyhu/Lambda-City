const chalk = require('chalk');
const emptyField = '';

// játéktér generálása
const generateMap = (width, height) => {
  console.clear();
  const arr = new Array(height);
  const PosEagle = (arr.length - 1) / 2;
  for (let posX = 0; posX < arr.length; posX++) {
    arr[posX] = new Array(width);
  }
  for (let posX = 0; posX < arr.length; posX++) {
    for (let posY = 0; posY < arr[posX].length; posY++) {
      arr[posX][posY] = emptyField;
      arr[0][posY] = 'FF';
      arr[arr.length - 1][posY] = 'FF';
      arr[posX][0] = 'FF';
      arr[posX][arr.length - 1] = 'FF';
      arr[arr.length - 2][PosEagle] = 'EE';
      arr[arr.length - 2][PosEagle - 1] = 'BB';
      arr[arr.length - 2][PosEagle + 1] = 'BB';
      arr[arr.length - 3][PosEagle - 1] = 'BB';
      arr[arr.length - 3][PosEagle + 1] = 'BB';
      arr[arr.length - 3][PosEagle] = 'BB';
    }
  }
  for (let posX = 2; posX < arr.length - 3; posX++) {
    for (let posY = 1; posY < arr[posX].length - 1; posY++) {
      if (posX % 6 !== 0 && posY % 2 === 0) {
        arr[posX][posY] = 'BB';
      } else if (posX === (arr.length - 1) / 2 && posY % 11 === 1) {
        arr[posX][posY] = 'UU';
      }
    }
  }
  return arr;
};
const directions = ['^', '>', '<', 'v'];

const newDirections = {
  '^': '/\\',
  v: '\\/',
  '<': '<<',
  '>': '>>'
};

const color = (map, enemies) => {
  const coloredMap = map.map(function (arr) {
    return arr.slice();
  });
  for (let i = 0; i < coloredMap.length; i++) {
    for (let j = 0; j < coloredMap[i].length; j++) {
      if (coloredMap[i][j] === 'F') {
        coloredMap[i][j] = chalk.grey(chalk.bgGrey('FF'));
      }
      if (coloredMap[i][j] === 'P') {
        coloredMap[i][j] = chalk.grey(chalk.bgBlue('PP'));
      }
      if (coloredMap[i][j] === 'U') {
        coloredMap[i][j] = chalk.grey(chalk.bgGrey('FF'));
      }
      if (coloredMap[i][j] === '*') {
        coloredMap[i][j] = '💩';
      }
      if (coloredMap[i][j] === 'E') {
        coloredMap[i][j] = chalk.bgYellow(chalk.cyan('MM'));
      }
      if (coloredMap[i][j] === 'B') {
        coloredMap[i][j] = '▓▓';
      }
      if (coloredMap[i][j] === '') {
        coloredMap[i][j] = '  ';
      }
      if (directions.includes(coloredMap[i][j])) {
        if (isEnemyAt(i, j, enemies)) {
          coloredMap[i][j] = chalk.bgRed(
            chalk.white(newDirections[coloredMap[i][j]])
          );
        } else {
          coloredMap[i][j] = chalk.bgGreen(
            chalk.white(newDirections[coloredMap[i][j]])
          );
        }
      }
    }
  }
  return coloredMap;
};

const isEnemyAt = (i, j, enemies) => {
  for (const enemy of enemies) {
    if (enemy.posX === i && enemy.posY === j && enemy.status === 'spawned') {
      return true;
    }
  }
  return false;
};

const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j]);
    }
    console.log();
  }
};

const printColorMap = (map, enemies) => {
  console.clear();
  const coloredMap = color(map, enemies);
  print2d(coloredMap);
};

module.exports = {
  printColorMap
};
