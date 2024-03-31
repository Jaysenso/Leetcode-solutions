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
var increasingBST = function(root) {
    let data = [];

    function dfs(root){
        if(root === null) return;
        dfs(root.left);
        data.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    let rootNode = new TreeNode(data[0]);
    data.shift();
    let curr = rootNode
    for(const node of data){
        curr.right = new TreeNode(node);
        curr = curr.right;
    }
    return rootNode;
};
