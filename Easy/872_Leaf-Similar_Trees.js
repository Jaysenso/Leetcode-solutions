/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
 
    const dfs = (leaves,node) => {
        if(!node) return [];
        if(!node.left && !node.right) { 
            leaves.push(node.val);
            return leaves;
        }

        dfs(leaves,node.left);
        dfs(leaves,node.right);
        return leaves;
    }
    return JSON.stringify(dfs([],root1)) === JSON.stringify(dfs([],root2));
};
