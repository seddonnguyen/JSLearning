// https://leetcode.com/problems/range-sum-query-2d-immutable/
// Leetcode 304. Range Sum Query 2D - Immutable
// Given a 2D matrix matrix, handle multiple queries of the following type:
// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Implement the NumMatrix class:
// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// You must design an algorithm where sumRegion works on O(1) time complexity.
//
// NumMatrix numMatrix = new NumMatrix(
//     [
//         [3, 0, 1, 4, 2],
//         [5, 6, 3, 2, 1],
//         [1, 2, 0, 1, 5],
//         [4, 1, 0, 1, 7],
//         [1, 0, 3, 0, 5]
//     ]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)

/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
    this.prefixMatrix = [];
    for(let row = 0; row < matrix.length; row++) {
        this.prefixMatrix[row] = [];
        let prefixSum = 0;
        for(let column = 0; column < matrix[0].length; column++) {
            let current = matrix[row][column];
            let top = row - 1 >= 0 ? this.prefixMatrix[row - 1][column] : 0;
            prefixSum += column - 1 >= 0 ? matrix[row][column - 1] : 0;
            this.prefixMatrix[row][column] = current + top + prefixSum;
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = this.prefixMatrix[row2][col2];
    if(col1 - 1 >= 0) {
        sum -= this.prefixMatrix[row2][col1 - 1];
    }
    if(row1 - 1 >= 0) {
        sum -= this.prefixMatrix[row1 - 1][col2];
    }
    if(row1 - 1 >= 0 && col1 - 1 >= 0) {
        sum += this.prefixMatrix[row1 - 1][col1 - 1];
    }
    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const numMatrix = new NumMatrix(
    [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
    ]);

console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)