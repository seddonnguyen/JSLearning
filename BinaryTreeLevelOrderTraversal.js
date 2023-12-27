// Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
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
const levelOrder = function(root) {
    let q = [root];
    let res = [];

    while(q.length > 0) {
        let length = q.length;
        let level = [];
        for(let i = 0; i < length; i++) {
            let node = q.shift();
            if(node) {
                level.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        if(level.length > 0) {
            res.push(level);
        }
    }
    return res;
};

let arr = [3, 9, 20, null, null, 15, 7];
let root = generateTree(arr);
console.log(levelOrder(root));