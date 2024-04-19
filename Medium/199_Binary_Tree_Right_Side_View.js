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
 * @return {number[]}
 */
var rightSideView = function(root) {
    /**
      Leetcode Solution : VERY SMART.
    */
    if(!root) return [];
    let res = [];

    const dfs = (node, depth) => {
        if(!node) return;
        res[depth] = node.val;
        dfs(node.left, depth + 1);
        //overwriting the index if right node is present
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return res;
    
    // let depth_nodes = new Map();

    // const dfs = (depth,node) => {
    //     if(!node) return;

    //     if(!depth_nodes.get(depth)) {
    //         depth_nodes.set(depth, []);
    //     }

    //     depth_nodes.get(depth).push(node.val);

    //     dfs(depth + 1 , node.right);
    //     dfs(depth + 1, node.left);
    // }

    // dfs(0,root);
    // let res = [];
    // for(const [depth, nodes] of depth_nodes){
    //     res.push(nodes[0]);
    // }
    // return res;
};
