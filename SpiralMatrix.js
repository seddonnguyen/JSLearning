const spiralOrder = matrix => {
    let res = [];
    let numOfElement = matrix.length * matrix[0].length;
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;

    while(res.length < numOfElement) {
        // Traverse Right
        for(let i = leftCol; i <= rightCol; i++) {
            res.push(matrix[topRow][i]);
        }
        topRow++;
        // Traverse Down
        for(let i = topRow; i <= bottomRow; i++) {
            res.push(matrix[i][rightCol]);
        }
        rightCol--;
        if(leftCol > rightCol || topRow > bottomRow) {
            break;
        }
        // Traverse Left
        for(let i = rightCol; i >= leftCol; i--) {
            res.push(matrix[bottomRow][i]);
        }
        bottomRow--;
        // Traverse Up
        for(let i = bottomRow; i >= topRow; i--) {
            res.push(matrix[i][leftCol]);
        }
        leftCol++;
    }
    return res;
}

let matrix = [[19, 12, 1, 13, 14, 4], [1, 2, 16, 2, 2, 5], [11, 20, 13, 17, 20, 7], [6, 15, 11, 10, 4, 4], [1, 18, 6, 16, 3, 19]];

console.log(spiralOrder(matrix));