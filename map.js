const table = require('table');
const emptyField = '';

// játéktér generálása
const generateMap = (width, height) => {
  // console.clear();
  const arr = new Array(height);
  const PosEagle = (arr.length - 1) / 2;
  for (let posX = 0; posX < arr.length; posX++) {
    arr[posX] = new Array(width);
  }
  for (let posX = 0; posX < arr.length; posX++) {
    for (let posY = 0; posY < arr[posX].length; posY++) {
      arr[posX][posY] = emptyField;
      arr[0][posY] = 'F';
      arr[arr.length - 1][posY] = 'F';
      arr[posX][0] = 'F';
      arr[posX][arr.length - 1] = 'F';
      arr[arr.length - 2][PosEagle] = 'E';
      arr[arr.length - 2][PosEagle - 1] = 'B';
      arr[arr.length - 2][PosEagle + 1] = 'B';
      arr[arr.length - 3][PosEagle - 1] = 'B';
      arr[arr.length - 3][PosEagle + 1] = 'B';
      arr[arr.length - 3][PosEagle] = 'B';
    }
  }
  for (let posX = 2; posX < arr.length - 3; posX++) {
    for (let posY = 1; posY < arr[posX].length - 1; posY++) {
      if (posX % 6 !== 0 && posY % 2 === 0) {
        arr[posX][posY] = 'B';
      }
    }
  }
  return arr;
};

// pálya kirajzoltatása
const printMap = (map) => {
  // console.clear(map);
  console.log(table.table(map));
};

module.exports = {
  emptyField,
  generateMap,
  printMap
};
