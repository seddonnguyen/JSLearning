// https://leetcode.com/problems/find-the-duplicate-number/
// leetcode 287. Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
//
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
//
// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3
//
// Constraints:
// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    let head = 0;
    let slow = head;
    let fast = head;
    // Find the cycle.
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(fast === slow) {
            break;
        }
    }
    // Find the head of the cycle
    while(true) {
        if(head === slow) {
            break;
        }
        head = nums[head];
        slow = nums[slow];
    }
    return head;
};
// The array is a linked list using the indices as pointer.
// Detect the cycle and find the head of the cycle.
const nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));