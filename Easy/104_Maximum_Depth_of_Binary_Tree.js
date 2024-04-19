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
var maxDepth = function(root) {
    if(!root) return 0;
    let maxDepth = -Infinity;

    const dfs = (node,depth) => {
        if(!node) return;
        if(!node.left && !node.right) maxDepth = depth > maxDepth ? depth : maxDepth;
        dfs(node.left,depth + 1);
        dfs(node.right, depth + 1);
    }
    
    dfs(root,1);
    return maxDepth;
};
