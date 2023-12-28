// Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
    const ROWS = obstacleGrid.length;
    const COLS = obstacleGrid[0].length;
    let dp = new Array(COLS).fill(0);
    dp[COLS - 1] = 1;

    for(let r = ROWS - 1; r >= 0; r--) {
        for(let c = COLS - 1; c >= 0; c--) {
            if(obstacleGrid[r][c]) {
                dp[c] = 0;
            } else if(c + 1 < COLS) {
                dp[c] += dp[c + 1];
            }

        }
    }
    return dp[0];
};

// You are given an m x n integer array grid.
// There is a robot initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.
// An obstacle and space are marked as 1 or 0 respectively in grid.
// A path that the robot takes cannot include any square that is an obstacle.
// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// Input: obstacleGrid = [
//  [0,0,0],
//  [0,1,0],
//  [0,0,0]
//  ]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
//     1. Right -> Right -> Down -> Down
//     2. Down -> Down -> Right -> Right


let obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

console.log(uniquePathsWithObstacles(obstacleGrid));