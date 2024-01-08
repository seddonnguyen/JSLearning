//https://leetcode.com/problems/permutations/
// LeetCode 46. Permutations
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
//
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
//
// Example 3:
// Input: nums = [1]
// Output: [[1]]
//
// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
    const build = i => {
        if(i === nums.length) {
            return [[]];
        }

        const result = [];
        const permutations = build(i + 1);
        for(let p of permutations) {
            for(let j = 0; j <= p.length; j++) {
                let copy = [...p];
                copy.splice(j, 0, nums[i]);
                result.push(copy);
            }
        }
        return result;
    };
    return build(0);
};

let nums = [1, 2, 3];
console.log(permute(nums));