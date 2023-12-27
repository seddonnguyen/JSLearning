// Binary Search Tree to Greater Sum Tree
// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
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
 * @return {TreeNode}
 */
let bstToGst = function(root) {
    let currentSum = 0;
    const dfs = node => {
        if(!node) {
            return;
        }

        dfs(node.right)
        let sum = currentSum + node.val;
        node.val = sum;
        currentSum = sum;
        dfs(node.left);

    }
    dfs(root);
    return root;
};

let arr = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
let root = generateTree(arr);
console.log(bstToGst(root));