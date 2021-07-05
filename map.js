const table = require('table');

const generateMap = (width, height) => {
    const arr = new Array(height);
    for (let i = 0; i < arr.length; i++){
        arr[i] = new Array(width);
    }
    return arr;
};

const fillMap = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = '';
            arr[0][j] = 'F';
            arr[i][0] = 'F';
            arr[arr.length - 1][j] = 'F';
            arr[i][arr[i].length - 1] = 'F';
        }
    }
    arr[23][12] = 'E';
    arr[23][11] = 'B';
    arr[23][13] = 'B';
    arr[22][11] = 'B';
    arr[22][12] = 'B';
    arr[22][13] = 'B';


    return arr;
};

console.log(table.table(fillMap(generateMap(25, 25))));