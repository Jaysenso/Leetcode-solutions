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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let path = "";
    let ans = [];

    const dfs = (node,path) => {
        if(!node) return;

        let curr = String.fromCharCode(97 + node.val) + path;
        if(!node.left && !node.right) ans.push(curr);
        dfs(node.left,curr);
        dfs(node.right,curr);
    }

    dfs(root,path);
    ans.sort();
    return ans[0];
   
};
