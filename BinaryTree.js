 function TreeNode (val, left, right)  {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 const generateTree = arr => {
    if(arr.length === 0) {
        return null;
    }

    const helper = i => {
        if(i < 0 || i > arr.length || arr[i] == null) {
            return null;
        }

        return new TreeNode(arr[i], helper(2*i + 1), helper(2*i + 2));
    }

    return helper(0);
}


 const isValidBST = root => {
    const validate = (node, left, right) => {
        if(node == null) {
            return true;
        }

        if(!(node.val > left && node.val < right)) {
            return false;
        }

        return validate(node.left, left, node.val) && validate(node.right, node.val, right);
    }
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};


//let tree = [5,1,4,null,null,3,6];
//let root = generateTree(tree);
//console.log(isValidBST(root));

export  {
    TreeNode,
    generateTree,
    isValidBST
}