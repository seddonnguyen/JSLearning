// https://leetcode.com/problems/number-of-islands/
/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    if(grid.length === 0) {
        return 0;
    }

    const ROWS = grid.length;
    const COLS = grid[0].length;
    let visit = new Set();
    let islands = 0;

    const bfs = (r, c) => {
        let q = [];
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        q.push([r, c]);
        visit.add(`(${r}, ${c})`);

        while(q.length !== 0) {
            const [row, col] = q.shift();

            for(let [dr, dc] of directions) {
                let r = dr + row;
                let c = dc + col;
                let corr = `(${r}, ${c})`;

                if(Math.min(r, c) >= 0 && r < ROWS && c < COLS && grid[r][c] === "1" && !visit.has(corr)) {
                    q.push([r, c]);
                    visit.add(corr);
                }
            }
        }
    };

    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            let corr = `(${r}, ${c})`;
            if(grid[r][c] === '1' && !visit.has(corr)) {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
};

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log(numIslands(grid));