// https://leetcode.com/problems/permutations-ii/
// LeetCode 47. Permutations II
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
//
// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
//
// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
// Constraints:
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    const countNumber = new Map();
    for(let n of nums) {
        countNumber.set(n, (countNumber.get(n) ?? 0) + 1);
    }

    const result = [];
    const permutation = [];

    const dfs = () => {
        if(permutation.length === nums.length) {
            result.push([...permutation]);
            return;
        }

        for(let n of countNumber.keys()) {
            if(countNumber.get(n) > 0) {
                permutation.push(n);
                countNumber.set(n, (countNumber.get(n) - 1));
                dfs();
                countNumber.set(n, (countNumber.get(n) + 1));
                permutation.pop();
            }
        }
    };
    dfs();
    return result;
};

const nums = [1, 1, 2];
console.log(permuteUnique(nums));