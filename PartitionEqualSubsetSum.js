// https://leetcode.com/problems/partition-equal-subset-sum/
// LeetCode 416. Partition Equal Subset Sum
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
//
// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
//
// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.
//
// Constraints:
// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    if(sum % 2 === 1) {
        return false;
    }

    let target = sum / 2;
    let cache = new Set();
    cache.add(0);

    for(let num of nums) {
        const nextCache = new Set();
        for(let value of cache) {
            nextCache.add(num + value);
            nextCache.add(value);
        }
        cache = nextCache;
    }
    return cache.has(target);
};

const nums = [1, 5, 11, 5];
console.log(canPartition(nums));