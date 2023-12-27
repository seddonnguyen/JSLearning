/**
 * @param {number} n
 * @return {string[][]}
 */

// https://leetcode.com/problems/n-queens/
const solveNQueens = n => {
    const col = new Set();
    const posDiag = new Set(); // r + c
    const negDiag = new Set(); // r - c
    let res = [];
    let board = [];

    for(let i = 0; i < n; i++) {
        board[i] = [];
        for(let j = 0; j < n; j++) {
            board[i][j] = ".";
        }
    }
    const backTrack = r => {
        if(r === n) {
            res.push(board.map(r => r.join("")))
            return;
        }

        for(let c = 0; c < n; c++) {
            if(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }

            col.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = "Q";

            backTrack(r + 1);

            col.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = "."
        }
    }
    backTrack(0);
    return res;
};

solveNQueens(4).map(b => b.join('\n')).forEach(b => console.log(b, '\n'))