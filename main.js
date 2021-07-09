const table = require('table').table;
const emptyField = '';

const generateMap = (width, height) => {
    const arr = new Array(height);
    const PositionEagle = (arr.length - 1) / 2;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(width);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = emptyField;
            arr[0][j] = 'F';
            arr[arr.length - 1][j] = 'F';
            arr[i][0] = 'F';
            arr[i][arr.length - 1] = 'F';
            arr[arr.length - 2][PositionEagle] = 'E';
            arr[arr.length - 2][PositionEagle - 1] = 'B';
            arr[arr.length - 2][PositionEagle + 1] = 'B';
            arr[arr.length - 3][PositionEagle - 1] = 'B';
            arr[arr.length - 3][PositionEagle + 1] = 'B';
            arr[arr.length - 3][PositionEagle] = 'B';
        }
    }
    for (let i = 2; i < arr.length - 3; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {
            if (i % 6 !== 0 && j % 2 === 0){
                arr[i][j] = 'B';
            } else if (i === ((arr.length - 1) / 2) && j % 11 === 1) {
                arr[i][j] = 'Ud';
            }
        }
    }
    return arr;
};

const map = generateMap(25, 25);

const player = {
    tank: '^',
    life: 3,
    spawnPointX: map.length - 2,
    spawnPointY: (map.length - 1) / 2 - 2,
    posX: 0,
    posY: 0
};
  
const printMap = (map) => {
    console.log(table(map));
};
  
const playerInput = (arr) => {
    if (
      player.spawnPointX === arr.length - 2 &&
      player.spawnPointY === (arr.length - 1) / 2 - 2
    ) {
      arr[arr.length - 2][(arr.length - 1) / 2 - 2] = player.tank;
      player.posX = player.spawnPointX;
      player.posY = player.spawnPointY;
      printMap(arr);
    }
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (key) => {
      if (key === 'w') {
        moveUp(arr);
        arr[player.posX][player.posY] = player.tank;
        printMap(arr);
      } else if (key === 's') {
            moveDown(arr);
            arr[player.posX][player.posY] = player.tank;
            printMap(arr);
      } else if (key === 'a') {
            moveLeft(arr);
            arr[player.posX][player.posY] = player.tank;
            printMap(arr);
      } else if (key === 'd') {
            moveRight(arr);
            arr[player.posX][player.posY] = player.tank;
            printMap(arr);
      } else if (key === 'h') {
            process.exit();
      } else if (key === 'q') {
          if (player.tank === '^') {
              arr[player.posX][player.posY] = player.tank;
              player.tank = '<';
              printMap(arr);
          } else if (player.tank === '<') {
              arr[player.posX][player.posY] = player.tank;
              player.tank = 'v';
              printMap(arr);
          } else if (player.tank === 'v') {
              arr[player.posX][player.posY] = player.tank;
              player.tank = '>';
              printMap(arr);
          } else if (player.tank === '>') {
              arr[player.posX][player.posY] = player.tank;
              player.tank = '^';
              printMap(arr);
          }
      } else if (key === 'e') {
        if (player.tank === '^') {
            arr[player.posX][player.posY] = player.tank;
            player.tank = '>';
            printMap(arr);
        } else if (player.tank === '>') {
            arr[player.posX][player.posY] = player.tank;
            player.tank = 'v';
            printMap(arr);
        } else if (player.tank === 'v') {
            arr[player.posX][player.posY] = player.tank;
            player.tank = '<';
            printMap(arr);
        } else if (player.tank === '<') {
            arr[player.posX][player.posY] = player.tank;
            player.tank = '^';
            printMap(arr);
        }
      }
    });
};

playerInput(map);

const moveUp = (arr) => {
    if (arr[player.posX - 1][player.posY] === emptyField) {
      player.posX--;
      arr[player.posX + 1][player.posY] = emptyField;
      player.tank = '^';
    }
    return arr;
};
  
const moveDown = (arr) => {
    if (arr[player.posX + 1][player.posY] === emptyField) {
      player.posX++;
      arr[player.posX - 1][player.posY] = emptyField;
      player.tank = 'v';
    }
    return arr;
};
  
const moveLeft = (arr) => {
    if (arr[player.posX][player.posY - 1] === emptyField) {
      player.posY--;
      arr[player.posX][player.posY + 1] = emptyField;
      player.tank = '<';
    }
    return arr;
};
  
const moveRight = (arr) => {
    if (arr[player.posX][player.posY + 1] === emptyField) {
      player.posY++;
      arr[player.posX][player.posY - 1] = emptyField;
      player.tank = '>';
    }
    return arr;
};