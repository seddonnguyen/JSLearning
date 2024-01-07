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
 * @return {number[][]}
 * @param word
 */
const permute = word => {
    const result = [];
    const letters = word.split("");
    const length = letters.length;

    if(length === 1) {
        return [[letters[0]]];
    }
    for(let i = 0; i < length; i++) {
        let l = letters.shift();
        let permutations = permute(letters.join(""));
        for(let p of permutations) {
            p.push(l);
        }
        result.push(...permutations);
        letters.push(l);
    }
    return result;
};

let nums = "abcde";
let permutations = permute(nums).map(x => x.join(""));
console.log(permutations, permutations.length);