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
 /**
  Intuitive Approach : instead of using queue/BFS - I used a map to store all the nodes at
  at that level using DFS. Once i traversed all the nodes in the tree, i just have to 
  iterate through my map (key,value) and push the values into an ans array and return as ans. 
 */
 
var levelOrder = function(root) {
    let map = new Map();
    let res = [];
    const dfs = (node, level) => {
        if(!node) return;
        if(!map.has(level)){
            map.set(level, []);
        }
        map.get(level).push(node.val);

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);

    map.forEach((nodes) => res.push(nodes));
    return res;
};  
