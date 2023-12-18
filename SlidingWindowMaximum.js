// Sliding Window Maximum
// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
    let l = 0, r = 0;
    let q = [];
    let result = [];
    while (r < nums.length) {
        while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }
        q.push(r);

        if(l > q[0]) {
            q.shift();
        }
        if((r + 1) >= k) {
            result.push(nums[q[0]]);
            l++;
        }
        r++;
    }
    return  result;
};

let nums = [7,2,4], k = 2;
console.log(maxSlidingWindow(nums, k));