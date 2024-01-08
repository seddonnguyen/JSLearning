// https://leetcode.com/problems/swim-in-rising-water/
// LeetCode 778. Swim in Rising Water
// You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).
// The rain starts to fall. At time t, the depth of the water everywhere is t.
// You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t.
// You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.
// Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).
//
// Example 1:
// Input: grid = [[0,2],[1,3]]
// Output: 3
// Explanation:
// At time 0, you are in grid location (0, 0).
// You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
// You cannot reach point (1, 1) until time 3.
// When the depth of water is 3, we can swim anywhere inside the grid.
//
// Example 2:
// Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
// Output: 16
// Explanation: The final route is shown.
// We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
//
// Constraints:
// n == grid.length
// n == grid[i].length
// 1 <= n <= 50
// 0 <= grid[i][j] < n2
// Each value grid[i][j] is unique.

const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = function(grid) {
    const N = grid.length;
    const visit = new Set();
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const minHeap = new MinPriorityQueue(position => position.time);
    minHeap.enqueue({row: 0, column: 0, time: grid[0][0]});

    while(minHeap.size() > 0) {
        const {row, column, time} = minHeap.dequeue();
        visit.add(`${row},${column}`);

        if(row === N - 1 && column === N - 1) {
            return time;
        }

        for(let [r, c] of direction) {
            let dr = row + r;
            let dc = column + c;
            let position = `${dr},${dc}`;
            if(dr < 0 || dc < 0 || dr >= N || dc >= N || visit.has(position)) {
                continue;
            }
            minHeap.enqueue({row: dr, column: dc, time: Math.max(time, grid[dr][dc])});
        }
    }
    return -1;
};

const grid = [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]];
console.log(swimInWater(grid));