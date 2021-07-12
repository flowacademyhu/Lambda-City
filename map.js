const emptyField = '';

// játék pályájának generálása
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
      if (i % 6 !== 0 && j % 2 === 0) {
        arr[i][j] = 'B';
      } else if (i === (arr.length - 1) / 2 && j % 11 === 1) {
        arr[i][j] = 'U';
      }
    }
  }
  return arr;
};

module.exports = {
  emptyField,
  generateMap
};
