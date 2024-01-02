// https://leetcode.com/problems/trapping-rain-water/
// Leetcode 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
//
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    if(!height.length) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    let water = 0;

    while(left < right) {
        if(maxLeft <= maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            water += maxLeft - height[left];
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            water += maxRight - height[right];
        }
    }
    return water;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));