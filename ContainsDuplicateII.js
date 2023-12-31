// https://leetcode.com/problems/contains-duplicate-ii/
// 219. Contains Duplicate II
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
//
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
//
// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let results = false;

    while(right < nums.length) {
        const size = right - left;
        if(size > k) {
            set.delete(nums[left]);
            left++;
        }

        if(set.has(nums[right])) {
            return true;
        }
        set.add(nums[right]);
        right++;
    }
    return results;
};

const nums = [1, 2, 3];
const k = 3;
console.log(containsNearbyDuplicate(nums, 3));