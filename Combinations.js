// https://leetcode.com/problems/combinations/
// LeetCode 77. Combinations
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
// You may return the answer in any order.
//
// Example 1:
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
//
// Example 2:
// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.
//
// Constraints:
// 1 <= n <= 20
// 1 <= k <= n

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    let subset = [];

    const dfs = (i, currentSet) => {
        if(currentSet.length === k) {
            subset.push([...currentSet]);
            return;
        }
        if(i > n) {
            return;
        }

        for(let j = i; j <= n; j++) {
            dfs(j + 1, [...currentSet, j]);
        }
    };
    dfs(1, []);
    return subset;
};

const n = 4;
const k = 2;
console.log(combine(n, k));