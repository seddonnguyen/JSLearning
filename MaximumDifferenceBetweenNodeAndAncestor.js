// Maximum Difference Between Node and Ancestor
// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
import {TreeNode, generateTree} from "./BinaryTree.js";
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
 * @return {number}
 */
const maxAncestorDiff = function(root) {
    let maxDiff = 0;
    let q = [[root, root.val, root.val]]; // [node, currentMax, currentMin]
    while(q.length > 0) {
        let [node, currentMax, currentMin] = q.shift();
        if(node) {
            currentMax = Math.max(currentMax, node.val);
            currentMin = Math.min(currentMin, node.val);
            maxDiff = Math.max(maxDiff, currentMax - currentMin);
            q.push([node.left, currentMax, currentMin]);
            q.push([node.right, currentMax, currentMin]);
        }
    }
    return maxDiff;
};

let arr = [8,3,10,1,6,null,14,null,null,4,7,13];
let root = generateTree(arr);
console.log(maxAncestorDiff(root))