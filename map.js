const table = require('table').table;

const generateMap = (width, height) => {
  const arr = new Array(height);
  const PositionEagle = (arr.length - 1) / 2;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(width);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
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
  return arr;
};

console.log(table(generateMap(25, 25)));
