// https://leetcode.com/problems/redundant-connection/
// leetcode 684. Redundant Connection
// In this problem, a tree is an undirected graph that is connected and has no cycles.
// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added.
// The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.
// The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
// Return an edge that can be removed so that the resulting graph is a tree of n nodes.
// If there are multiple answers, return the answer that occurs last in the input.
//
// Example 1:
// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]
//
// Example 2:
// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]
//
// Constraints:
// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ai < bi <= edges.length
// ai != bi
// There are no repeated edges.
// The given graph is connected.

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function(edges) {
    const parent = [0];
    const rank = [1];

    for(let i = 1; i <= edges.length + 1; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    /**
     * @param {number} n
     * @return {number}
     */
    const find = n => {
        let p = parent[n];
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    };

    /**
     * @param {number} n1
     * @param {number} n2
     * @return {boolean}
     */
    const union = (n1, n2) => {
        let p1 = find(n1);
        let p2 = find(n2);

        if(p1 === p2) {
            return false;
        }

        if(rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    };

    for(let [n1, n2] of edges) {
        if(!union(n1, n2)) {
            return [n1, n2];
        }
    }
    return [];
};

const edges = [[1, 2], [1, 3], [2, 3]];
console.log(findRedundantConnection(edges));