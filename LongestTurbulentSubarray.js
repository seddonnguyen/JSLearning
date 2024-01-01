// https://leetcode.com/problems/longest-turbulent-subarray/
// 978. Longest Turbulent Subarray
// Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
// A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
// More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
//
// For i <= k < j:
//     arr[k] > arr[k + 1] when k is odd, and
//     arr[k] < arr[k + 1] when k is even.
//
// Or,
// For i <= k < j:
//     arr[k] > arr[k + 1] when k is even, and
//     arr[k] < arr[k + 1] when k is odd.
//
// Example 1:
// Input: arr = [9,4,2,10,7,8,8,1,9]
// Output: 5
// Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
//
// Example 2:
// Input: arr = [4,8,12,16]
// Output: 2
//
// Example 3:
// Input: arr = [100]
// Output: 1

/**
 * @param {number[]} arr
 * @return {number}
 */
const maxTurbulenceSize = function(arr) {
    let [left, right] = [0, 1];
    let maxLength = 1;
    let previousSign = "";

    while(right < arr.length) {
        if(arr[right - 1] > arr[right] && previousSign !== ">") {
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
            previousSign = ">";
        } else if(arr[right - 1] < arr[right] && previousSign !== "<") {
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
            previousSign = "<";
        } else {
            right = arr[right - 1] === arr[right] ? right + 1 : right;
            left = right - 1;
            previousSign = "";
        }
    }
    return maxLength;
};

const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];
console.log(maxTurbulenceSize((arr)));