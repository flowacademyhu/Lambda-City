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
            arr[arr.length - 2][PositionEagle - 2] = 'PS';
            arr[1][PositionEagle] = 'ES';
            arr[1][1] = 'ES';
            arr[1][arr.length - 2] = 'ES';
        }
    }
    for (let i = 2; i < arr.length - 4; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {
            arr[Math.floor(Math.random() * (arr.length - 4 - 2 + 1)) + 2][Math.floor(Math.random() * (arr[i].length - 1 - 1 + 1)) + 1] = 'B';
        }
    }
    return arr;
};

console.log(table(generateMap(25, 25)));
