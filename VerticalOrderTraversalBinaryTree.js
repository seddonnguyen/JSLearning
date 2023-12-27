// Vertical Order Traversal of a Binary Tree
// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
import {generateTree, TreeNode} from "./BinaryTree.js";
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
    let map = new Map();
    let nodes = [];

    const dfs = (node, row, column) => {
        if(!node) {
            return;
        }
        nodes.push([row, column, node.val])
        dfs(node.left, row + 1, column - 1);
        dfs(node.right, row + 1, column + 1);
    }
    dfs(root, 0, 0);
    nodes.sort((a, b) => a[1] - b[1] || a[0] - b[0] || a[2] - b[2]);
    for(let [row, col, val] of nodes) {
        if(!map.get(col)) {
            map.set(col, [val]);
        } else {
            map.get(col).push(val);
        }
    }
    return [...map.values()];
};


let arr = [1, 2, 3, 4, 5, 6, 7];
let root = generateTree(arr);
console.log(verticalTraversal(root))