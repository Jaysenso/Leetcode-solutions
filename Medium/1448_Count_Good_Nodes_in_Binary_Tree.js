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
var goodNodes = function(root) {
    let count = 0;
    
    const dfs = (max,node) => {
        if(!node) {
            return;
        }
        if(node.val >= max) {
            max = node.val;
            count++;

        }
        dfs(max,node.left);
        dfs(max,node.right);
    }

    dfs(-Infinity,root);
    return count;
};
