// https://leetcode.com/problems/path-with-maximum-probability/
// LeetCode 1514. Path with Maximum Probability
// You are given an undirected weighted graph of n nodes (0-indexed),
// represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b
// with a probability of success of traversing that edge succProb[i].
// Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.
// If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.
//
// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
// Output: 0.25000
// Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
//
// Example 2:
// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
// Output: 0.30000
//
// Example 3:
// Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
// Output: 0.00000
// Explanation: There is no path between 0 and 2.
//
// Constraints:
// 2 <= n <= 10^4
// 0 <= start, end < n
// start != end
// 0 <= a, b < n
// a != b
// 0 <= succProb.length == edges.length <= 2*10^4
// 0 <= succProb[i] <= 1
// There is at most one edge between every two nodes.

const {MaxPriorityQueue} = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
const maxProbability = function(n, edges, succProb, start_node, end_node) {
    const maxHeap = new MaxPriorityQueue(path => path.probability);
    const visit = new Set();
    const path = new Map();
    for(let i = 0; i <= n; i++) {
        path.set(i, []);
    }
    for(let i = 0; i < edges.length; i++) {
        const [source, destination] = edges[i];
        path.get(source).push([destination, succProb[i]]);
        path.get(destination).push([source, succProb[i]]);
    }
    maxHeap.enqueue({probability: 1, node: start_node});
    while(maxHeap.size()) {
        const {probability, node: currentNode} = maxHeap.dequeue();
        visit.add(currentNode);
        if(currentNode === end_node) {
            return probability;
        }
        for(let [neighbor, edgeProbability] of path.get(currentNode)) {
            if(!visit.has(neighbor)) {
                maxHeap.enqueue({probability: (probability * edgeProbability), node: neighbor});
            }
        }
    }
    return 0;
};

const n = 500;
const edges = [[193, 229], [133, 212], [224, 465]];
const succProb = [0.91, 0.78, 0.64];
const startNode = 4;
const endNode = 364;
console.log(maxProbability(n, edges, succProb, startNode, endNode));