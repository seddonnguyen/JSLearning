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

let obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(uniquePathsWithObstacles(obstacleGrid));