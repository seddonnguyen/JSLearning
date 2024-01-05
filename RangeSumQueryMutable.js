// https://leetcode.com/problems/range-sum-query-mutable/
// leetcode 307. Range Sum Query - Mutable
// Given an integer array nums, handle multiple queries of the following types:
//     Update the value of an element in nums.
//     Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:
//     NumArray(int[] nums) Initializes the object with the integer array nums.
//     void update(int index, int val) Updates the value of nums[index] to be val.
//     int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
//
// Example 1:
// Input
//     ["NumArray", "sumRange", "update", "sumRange"]
//     [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
// Output
//     [null, 9, null, 8]
//
// Explanation
// NumArray numArray = new NumArray([1, 3, 5]);
// numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
// numArray.update(1, 2);   // nums = [1, 2, 5]
// numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
//
// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// 0 <= index < nums.length
// -100 <= val <= 100
// 0 <= left <= right < nums.length
// At most 3 * 104 calls will be made to update and sumRange.

const {SegmentTree} = require('./SegmentTree.js');

/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
    this.root = SegmentTree.build(nums, 0, nums.length - 1);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.root.update(index, val);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.root.rangeQuery(left, right);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

const nums = [1, 3, 5];
const sumRange1 = [0, 2];
const update = [1, 2];
const sumRange2 = [0, 2];

const numArray = new NumArray(nums);
console.log(numArray.sumRange(...sumRange1)); // return 1 + 3 + 5 = 9
numArray.update(...update);   // nums = [1, 2, 5]
console.log(numArray.sumRange(...sumRange2)); // return 1 + 2 + 5 = 8