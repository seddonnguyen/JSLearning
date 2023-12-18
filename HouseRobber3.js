// Definition of a binary tree node
import {TreeNode, generateTree} from './BinaryTree.js'

function rob(root) {
// [with Root, without Root]
    const dfs = root => {
        if(!root) {
            return [0,0];
        }

        let left = dfs(root.left);
        let right = dfs(root.right);

        let withRoot = root.val + left[1] + right[1];
        let withoutRoot = Math.max(...left) + Math.max(...right);

        return [withRoot, withoutRoot];
    }
    // Replace this placeholder return statement with your code
    return Math.max(...dfs(root));
}

let arr = [9,7,11,1,8,10,12];
console.log(rob(generateTree(arr)));
