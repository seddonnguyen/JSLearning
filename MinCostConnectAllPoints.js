// https://leetcode.com/problems/min-cost-to-connect-all-points/
// LeetCode 1584. Min Cost to Connect All Points
// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|,
// where |val| denotes the absolute value of val.
// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
//
// Example 1:
// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation:
// We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.
//
// Example 2:
// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18
//
// Constraints:
// 1 <= points.length <= 1000
// -106 <= xi, yi <= 106
// All pairs (xi, yi) are distinct.

const {MinPriorityQueue} = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function(points) {
    const visit = new Set();
    const minHeap = new MinPriorityQueue(node => node.cost);
    let totalCost = 0;
    minHeap.enqueue({node: 0, cost: 0});

    while(minHeap.size()) {
        const {node, cost} = minHeap.dequeue();
        if(visit.has(node)) {
            continue;
        }
        totalCost += cost;
        visit.add(node);
        for(let i = 0; i < points.length; i++) {
            if(visit.has(i)) {
                continue;
            }
            const [x1, y1] = points[node];
            const [x2, y2] = points[i];
            const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            minHeap.enqueue({node: i, cost: cost});
        }
    }
    return totalCost;
};
const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
console.log(minCostConnectPoints(points));