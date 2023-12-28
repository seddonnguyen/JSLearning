// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0;

    for(let n of nums) {
        let max = Math.max(rob1 + n, rob2);
        rob1 = rob2;
        rob2 = max;
    }
    return rob2;
};

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));