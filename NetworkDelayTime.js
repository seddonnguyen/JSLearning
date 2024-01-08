// https://leetcode.com/problems/network-delay-time/
// LeetCode 743. Network Delay Time
// You are given a network of n nodes, labeled from 1 to n.
// You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi),
// where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
// We will send a signal from a given node k.
// Return the minimum time it takes for all the n nodes to receive the signal.
// If it is impossible for all the n nodes to receive the signal, return -1.
//
// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
//
// Example 2:
// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1
//
// Example 3:
// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1
//
// Constraints:
// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
const networkDelayTime = function(times, n, k) {
    const shortestPath = new Map();
    const minCost = new MinPriorityQueue(node => node.time);
    const path = new Map();
    for(let i = 1; i <= n; i++) {
        path.set(i, []);
    }

    for(let [source, destination, time] of times) {
        path.get(source).push({destination, time});
    }

    minCost.enqueue({node: k, time: 0});
    while(minCost.size() > 0) {
        const {node, time} = minCost.dequeue();
        if(shortestPath.has(node)) {
            continue;
        }

        shortestPath.set(node, time);
        for(let {destination: node2, time: time2} of path.get(node)) {
            if(!shortestPath.has(node2)) {
                minCost.enqueue({node: node2, time: (time + time2)});
            }
        }
    }
    if(shortestPath.size === path.size) {
        return Math.max(...shortestPath.values());
    } else {
        return -1;
    }
};

const times = [[1, 2, 1], [2, 3, 2], [1, 3, 4]];
const n = 3;
const k = 1;
console.log(networkDelayTime(times, n, k));