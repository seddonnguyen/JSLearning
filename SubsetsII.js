// https://leetcode.com/problems/subsets-ii/
// LeetCode 90. Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
//
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
//
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]
//
// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
    const subset = [];
    
    const dfs = (i, currentSet) => {
        if(i >= nums.length) {
            subset.push([...currentSet]);
            return;
        }

        dfs(i + 1, [...currentSet, nums[i]]);
        while(i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        dfs(i + 1, [...currentSet]);
    };
    dfs(0, []);
    return subset;
};

const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));