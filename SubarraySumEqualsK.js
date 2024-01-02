// https://leetcode.com/problems/subarray-sum-equals-k/
// leetcode 560. Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
//
// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2
//
// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    let prefixSum = new Map();
    let sum = 0;
    let res = 0;

    prefixSum.set(0, 1);

    for(let n of nums) {
        sum += n;
        let diff = sum - k;

        if(prefixSum.has(diff)) {
            res += prefixSum.get(diff);
        }
        prefixSum.set(sum, (prefixSum.get(sum) ?? 0) + 1);
    }
    console.log(prefixSum);
    return res;
};

const nums = [1, 2, 3];
const k = 3;
console.log(subarraySum(nums, k));