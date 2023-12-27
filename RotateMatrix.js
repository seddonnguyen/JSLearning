const rotateImage = matrix => {
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;
    let turn = matrix.length - 1;
    let count = 0;

    let topLeft = [rowBegin, colBegin];
    let topRight = [rowBegin, colEnd];
    let bottomLeft = [rowEnd, colBegin];
    let bottomRight = [rowEnd, colEnd]

    const swap = i => {
        // Swap Top Left with Top Right
        [matrix[topLeft[0]][topLeft[1] + i], matrix[topRight[0] + i][topRight[1]]] = [matrix[topRight[0] + i][topRight[1]], matrix[topLeft[0]][topLeft[1] + i]];
        // Swap Top Left with Bottom Right
        [matrix[topLeft[0]][topLeft[1] + i], matrix[bottomRight[0]][bottomRight[1] - i]] = [matrix[bottomRight[0]][bottomRight[1] - i], matrix[topLeft[0]][topLeft[1] + i]];
        // Swap Top Left with Bottom Left
        [matrix[topLeft[0]][topLeft[1] + i], matrix[bottomLeft[0] - i][bottomLeft[1]]] = [matrix[bottomLeft[0] - i][bottomLeft[1]], matrix[topLeft[0]][topLeft[1] + i]];
    }

    while(rowBegin <= rowEnd && colBegin <= colEnd) {
        for(let i = 0; i < turn; i++) {
            swap(i);
        }

        rowBegin++;
        rowEnd--;
        colBegin++;
        colEnd--;
        count++;
        turn = rowEnd - count;

        topLeft = [rowBegin, colBegin];
        topRight = [rowBegin, colEnd];
        bottomLeft = [rowEnd, colBegin];
        bottomRight = [rowEnd, colEnd]
    }
    return matrix
}

let matrix = [[19, 12, 1, 13, 14, 4], [1, 2, 16, 2, 2, 5], [11, 20, 13, 17, 20, 7], [6, 15, 11, 10, 4, 4], [1, 18, 6, 16, 3, 19], [16, 6, 18, 12, 9, 2]];

console.log(rotateImage(matrix));