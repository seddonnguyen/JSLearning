// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    let one = 1;
    let two = 1;

    for(let i = 0; i < n - 1; i++) {
        [one, two] = [one + two, one];
    }
    return one;
};

const n = 3;
console.log(climbStairs(n));

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step