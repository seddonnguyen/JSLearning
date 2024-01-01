// https://leetcode.com/problems/minimum-size-subarray-sum/
// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
//
// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
//
// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1
//
// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
    let minLength = nums.length;
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while(right < nums.length) {
        currentSum += nums[right];
        if(currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            while(currentSum - nums[left] >= target) {
                currentSum -= nums[left];
                left++;
                minLength = Math.min(minLength, right - left + 1);
            }
        }
        right++;
    }
    return currentSum >= target ? minLength : 0;
};

let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));