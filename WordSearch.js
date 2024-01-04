// https://leetcode.com/problems/word-search/
// leetcode 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.
//
// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
//
// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
//
// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
//
// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    const [ROW, COL] = [board.length, board[0].length];
    const path = new Set();
    /**
     * @param {number} row
     * @param {number} col
     * @param {number} idx
     * @return {boolean}
     */
    const dfs = (row, col, idx) => {
        if(idx === word.length) {
            return true;
        }
        const position = `(${row},${col})`;
        if(Math.min(row, col) < 0 || row >= ROW || col >= COL || word[idx] !== board[row][col] || path.has(position)) {
            return false;
        }
        let result = false;
        path.add(position);
        for(let [r, c] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
            result ||= dfs(row + r, col + c, idx + 1);
        }
        path.delete(position);
        return result;
    };

    for(let row = 0; row < ROW; row++) {
        for(let col = 0; col < COL; col++) {
            if(dfs(row, col, 0)) {
                return true;
            }
        }
    }
    return false;
};

const board =
    [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ];
const word = "ABCCED";
console.log(exist(board, word));