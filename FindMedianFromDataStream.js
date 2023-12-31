// https://leetcode.com/problems/find-median-from-data-stream/
// leetcode 295. Find Median from Data Stream
// The median is the middle value in an ordered integer list.
// If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
//
// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:
//     MedianFinder() initializes the MedianFinder object.
//     void addNum(int num) adds the integer num from the data stream to the data structure.
//     double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
//
// Example 1:
// Input
//     ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
//     [[], [1], [2], [], [3], []]
// Output
//     [null, null, null, 1.5, null, 2.0]
//
// Explanation:
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
//
// Constraints:
// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.

const {MinPriorityQueue, MaxPriorityQueue} = require('@datastructures-js/priority-queue');

class MedianFinder {
    constructor() {
        this.upperRange = new MinPriorityQueue();
        this.lowerRange = new MaxPriorityQueue();
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.lowerRange.enqueue(num);
        if(this.upperRange.size() > 0 && this.lowerRange.front() > this.upperRange.front()) {
            this.upperRange.enqueue(this.lowerRange.dequeue());
        }

        if(this.lowerRange.size() > this.upperRange.size() + 1) {
            this.upperRange.enqueue(this.lowerRange.dequeue());
        }

        if(this.upperRange.size() > this.lowerRange.size() + 1) {
            this.lowerRange.enqueue(this.upperRange.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.lowerRange.size() > this.upperRange.size()) {
            return this.lowerRange.front();
        } else if(this.lowerRange.size() < this.upperRange.size()) {
            return this.upperRange.front();
        } else {
            return (this.lowerRange.front() + this.upperRange.front()) / 2;
        }
    }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian());
medianFinder.addNum(3);
console.log(medianFinder.findMedian());